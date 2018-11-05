/**
 * Базовый класс, отвечающий за генерацию полей для ввода данных и их валидацию.
 */
class Input {
  /**
   * @param name Атрибут name тега input
   * @param title Описание тега input
   * @param type Атрибут type тега input
   * @param id Уникальный идентификатор тега input
   */
  constructor(name, title, type, id) {
    this.name = name;
    this.title = title;
    this.type = type;
    this.id = id;
  }

  /**
   * Генерация шаблона input
   * @returns {string} Шаблон поля ввода
   */
  render() {
    let input = '<div>';
    input += `<input id="${this.id}" type="${this.type}" name="${this.name}" placeholder="${this.title}">
    <div class="error error-${this.id}"></div>`;
    input += '</div>';

    return input;
  }

  /**
   * Валидация поля
   * @returns {boolean} Результат валидации
   */
  validate() {
    this.displayErrors('No validate rules!');
    return false;
  }

  /**
   * Отображение ошибок
   * @param message Текст ошибки
   */
  displayErrors(message) {
    let input = document.getElementById(this.id);
    let inputError = document.querySelector(`.error-${this.id}`);
    input.classList.add('errorValue');
    inputError.classList.add('show');
    inputError.innerHTML = message;
  }

  /**
   * Скрытие ошибок
   */
  hideErrors() {
    let input = document.getElementById(this.id);
    let inputError = document.querySelector(`.error-${this.id}`);
    input.classList.remove('errorValue');
    inputError.classList.remove('show');
    inputError.innerHTML = '';
  }
}
