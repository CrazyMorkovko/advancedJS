/**
 * Класс, отвечающий за поле ввода телефона
 */
class InputPhone extends Input {
  validate() {
    let input = document.getElementById(this.id);
    if (!(/^\+7\(\d{3}\)\d{3}-\d{4}$/.test(input.value))) {
      this.displayErrors('Номер телефона должен соответствовать формату +7(000)000-0000.');
      return false;
    }
    return true;
  }
}
