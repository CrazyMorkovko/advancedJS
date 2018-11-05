$(document).ready(() => {
  let container = document.getElementById('container');
  let inputName = new InputName('name', 'Имя', 'text', 'name');
  let inputPhone = new InputPhone('phone', 'Телефон', 'text', 'phone');
  let inputEmail = new InputEmail('email', 'E-mail', 'text', 'email');
  let inputCity = new InputCity('city', 'Ваш город', 'city');
  let inputText = new InputText('text', 'Текст', 'text');

  let form = new Form([inputName, inputPhone, inputEmail, inputCity, inputText], 'form');
  container.innerHTML = form.render();
  form.registerListeners();
});
