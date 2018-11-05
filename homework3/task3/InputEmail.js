/**
 * Класс, отвечающий за поле ввода электронного адреса
 */
class InputEmail extends Input {
  validate() {
    let input = document.getElementById(this.id);
    if (!((/^[A-Za-z]+@[A-Za-z]+.[A-Za-z]+$/.test(input.value))
      || (/^[A-Za-z]+\.[A-Za-z]+@[A-Za-z]+.[A-Za-z]+$/.test(input.value))
      || (/^[A-Za-z]+-[A-Za-z]+@[A-Za-z]+.[A-Za-z]+$/.test(input.value)))) {
      this.displayErrors('E-mail должен соответствовать форматам: mymail@mail.ru или my.mail@mail.ru, или my-mail@mail.ru');
      return false;
    }
    return true;
  }
}
