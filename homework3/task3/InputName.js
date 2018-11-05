/**
 * Класс, отвечающий за поле ввода имени
 */
class InputName extends Input {
  validate() {
    let input = document.getElementById(this.id);
    if (!(/^[A-Za-zА-Яа-яЁё]+$/.test(input.value))) {
      this.displayErrors('Имя должно содержать только буквы!');
      return false;
    }
    return true;
  }
}
