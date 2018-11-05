/**
 * Класс, отвечающий за выбор города
 */
class InputCity extends Input {
  /**
   * @param name Атрибут name тега input
   * @param title Описание тега input
   * @param id Уникальный идентификатор тега input
   */
  constructor(name, title, id) {
    super(name, title, null, id);
    this.cities = [];
    this.filter = '';
    this.load();
    this.registerListener();
  }

  /**
   * Загрузка списка городов.
   */
  load() {
    $.get(`cities.json?query=${this.filter}`, data => {
      this.cities = data.filter(city => this.filter.length > 2 && city.city.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase()));
      this.updateList();
    });
  }

  validate() {
    let select = $(`#${this.id}`);
    if (!select.val()) {
      this.displayErrors('Выберите город!');
      return false;
    }
    return true;
  }

  render() {
    let input = '<div class="city-select-field">';
    input += `<input id="${this.id}" name="${this.name}" placeholder="${this.title}">
    <div id="list-${this.id}">${this.renderList()}</div><div class="error error-${this.id}"></div>`;
    input += '</div><div class="clearfix"></div>';

    return input;
  }

  /**
   * Подготовка списка опций для select.
   * @returns {string} Список опций
   */
  renderList() {
    let options = '<ul class="city-select-menu">';
    this.cities.forEach(city => {
      options += `<li><a href="#" class="city-select" data-value="${city.city}">${city.city}</a></li>`;
    });
    options += '</ul>';
    if (this.cities.length === 0) {
      options = '';
    }
    return options;
  }

  /**
   * Обновление списка опций на странице.
   */
  updateList() {
    let list = $(`#list-${this.id}`);
    list.html(this.renderList());
  }

  registerListener() {
    $(document).on('click', `.city-select`, (event) => {
      let target = $(event.target);
      let input = $(`#${this.id}`);
      input.val(target.data('value'));
      if (this.cities.find(city => city.city.toLocaleLowerCase() === input.val().toLocaleLowerCase())) {
        let list = $(`#list-${this.id}`);
        list.hide();
      }
    });

    $(document).on('input', `#${this.id}`, (event) => {
      let input = $(event.target);
      let list = $(`#list-${this.id}`);
      if (input.val().length < 3) {
        list.hide();
      } else {
        list.show();
        this.filter = input.val();
        this.load();
      }
    })
  }
}
