/**
 * Класс для отображения и валидации формы.
 */
class Form {
  /**
   * @param inputs Массив с объектами типа Input
   * @param id Уникальный идентификатор формы
   */
  constructor(inputs, id) {
    this.inputs = inputs;
    this.id = id;
  }

  /**
   * Подготовка шаблона формы.
   * @returns {string} Форма
   */
  render() {
    let form = `<form id="${this.id}">`;
    this.inputs.forEach(input => {
      form += `${input.render()}`;
    });
    form += '<button>Отправить</button></form>';
    return form;
  }

  /**
   * Регистрация событий для валидации.
   */
  registerListeners() {
    document.getElementById(this.id).addEventListener('submit', evt => {
      // Скрываем старые ошибки.
      this.inputs.forEach(input => {
        input.hideErrors();
      });
      // Валидация и отображение ошибок.
      this.inputs.forEach(input => {
        if (!input.validate()) {
          evt.preventDefault();
        }
      });
    })
  }
}
