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
    this.load();
  }

  /**
   * Загрузка списка городов.
   */
  load() {
    $.get("cities.json", data => {
      this.cities = data;
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
    let input = '<div>';
    input += `<select id="${this.id}" name="${this.name}">${this.renderList()}</select>
    <div class="error error-${this.id}"></div>`;
    input += '</div>';

    return input;
  }

  /**
   * Подготовка списка опций для select.
   * @returns {string} Список опций
   */
  renderList() {
    let options = `<option selected disabled>${this.title}</option>`;
    this.cities.forEach(city => {
      options += `<option value="${city.city}">${city.city}</option>`;
    });
    if (this.cities.length === 0) {
      options = `<option disabled selected>Загрузка</option>`
    }
    return options;
  }

  /**
   * Обновление списка опций на странице.
   */
  updateList() {
    let select = $(`#${this.id}`);
    select.html(this.renderList());
  }
}
