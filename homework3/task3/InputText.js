/**
 * Класс, отвечающий за поле ввода текста
 */
class InputText extends Input {
  /**
   * @param name Атрибут name тега input
   * @param title Описание тега input
   * @param id Уникальный идентификатор тега input
   */
  constructor(name, title, id) {
    super(name, title, null, id);
  }

  validate() {
    let input = document.getElementById(this.id);
    if (!(/.+/.test(input.value))) {
      this.displayErrors('Введите текст!');
      return false;
    }
    return true;
  }

  render() {
    let input = '<div>';
    input += `<textarea id="${this.id}" name="${this.name}" placeholder="${this.title}"></textarea>
    <div class="error error-${this.id}"></div>`;
    input += '</div>';

    return input;
  }
}
