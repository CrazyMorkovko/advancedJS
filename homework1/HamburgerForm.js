/**
 * Класс, отвечающий за отображение формы.
 */
class HamburgerForm {
  /**
   * @param size              Размеры гамбургера
   * @param stuffing          Начинки гамбургера
   * @param topping           Топпинги для гамбургера
   * @param containerSelector Селектор контейнера
   */
  constructor(size, stuffing, topping, containerSelector) {
    this.hamburger = new Hamburger();
    this.size = size;
    this.stuffing = stuffing;
    this.topping = topping;
    this.containerSelector = containerSelector;
  }

  /**
   * @returns {string} Итоговые данные собранного гамбургера
   */
  renderTotal() {
    return `<div>Price: ${this.hamburger.calculatePrice()}<br>Calories: ${this.hamburger.calculateCalories()}.</div>`;
  }

  /**
   * @returns {string} Форма для выбора размера гамбургера
   */
  renderSize() {
    let sizes = `<div><h4>Size: </h4>`;
    if (!this.hamburger.getSize()) {
      sizes += `<div class="error">Choose size!</div>`
    }
    this.size.forEach(size => {
      let isActive = this.hamburger.getSize() === size;
      sizes +=
        `<button data-type="size" 
        data-name="${size.getName()}" 
        class="options" ${isActive ? 'disabled' : ''}>
            ${size.getName()}
        </button>`;
    });
    sizes += `</div>`;
    return sizes;
  }

  /**
   * @returns {string} Форма для выбора начинки гамбургера
   */
  renderStuffing() {
    let stuffings = `<div><h4>Stuffing: </h4>`;
    if (!this.hamburger.getStuffing()) {
      stuffings += `<div class="error">Choose stuffing!</div>`
    }
    this.stuffing.forEach(stuffing => {
      let isActive = this.hamburger.getStuffing() === stuffing;
      stuffings +=
        `<button data-type="stuffing" 
        data-name="${stuffing.getName()}" 
        class="options" ${isActive ? 'disabled' : ''}>
            ${stuffing.getName()}
        </button>`
    });
    stuffings += `</div>`;
    return stuffings;
  }

  /**
   * @returns {string} Форма для выбора топпингов для гамбургера
   */
  renderTopping() {
    let toppings = `<div><h4>Toppings: </h4>`;
    this.topping.forEach(topping => {
      let isActive = this.hamburger.getToppings().includes(topping);
      toppings +=
        `${topping.getName()}
        <input type="checkbox" class="toppings" value="${topping.getName()}" ${isActive ? 'checked' : ''}>`
    });
    toppings += `</div>`;
    return toppings;
  }

  /**
   * @returns {string} Форма сборки гамбургера
   */
  render() {
    return this.renderSize() + this.renderStuffing() + this.renderTopping() + this.renderTotal();
  }

  /**
   * Метод, обновляющий разметку в контейнере и регистрирующий события формы.
   */
  updateHTML() {
    let container = document.querySelector(this.containerSelector);

    container.innerHTML = this.render();

    // Регистрируем событие выбора топпинга.
    for (let toppingOption of document.querySelectorAll('.toppings')) {
      toppingOption.addEventListener('change', (event) => {
        let name = event.target.value;

        let topping = this.topping.find((t) => t.getName() === name);

        if (event.target.checked) {
          this.hamburger.addTopping(topping);
        } else {
          this.hamburger.removeTopping(topping);
        }

        this.updateHTML();
      })
    }

    // Регистрируем события выбора размера и начинки.
    for (let option of document.querySelectorAll('.options')) {
      option.addEventListener('click', (event) => {
        let type = event.target.dataset.type;
        let name = event.target.dataset.name;

        switch (type) {
          case 'stuffing': {
            let stuffing = this.stuffing.find((s) => s.getName() === name);
            this.hamburger.setStuffing(stuffing);
            break;
          }
          case 'size': {
            let size = this.size.find((s) => s.getName() === name);
            this.hamburger.setSize(size);
            break;
          }
        }

        this.updateHTML();
      })
    }
  }
}
