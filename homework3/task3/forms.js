"use strict";

let form = document.getElementById('form');

/**
 * Функция валидирует форму и выводит ошибку в случае ввода неверных данных.
 *
 * @param {Event} event
 */
form.addEventListener('submit', (event) => {
  const name = document.getElementsByName('name')[0];
  const phone = document.getElementsByName('phone')[0];
  const email = document.getElementsByName('email')[0];
  const text = document.getElementsByName('text')[0];

  const nameError = document.getElementsByClassName('errorName')[0];
  const phoneError = document.getElementsByClassName('errorPhone')[0];
  const emailError = document.getElementsByClassName('errorEmail')[0];
  const textError = document.getElementsByClassName('errorText')[0];

  nameError.innerHTML = '';
  phoneError.innerHTML = '';
  emailError.innerHTML = '';
  textError.innerHTML = '';

  name.classList.remove('errorValue');
  phone.classList.remove('errorValue');
  email.classList.remove('errorValue');
  text.classList.remove('errorValue');

  if (!(/^[A-Za-zА-Яа-яЁё]+$/.test(name.value))) {
    nameError.innerHTML = 'Имя должно содержать только буквы!';
    name.classList.add('errorValue');
    event.preventDefault();
  }

  if (!(/^\+7\(\d{3}\)\d{3}-\d{4}$/.test(phone.value))) {
    phoneError.innerHTML = 'Номер телефона должен соответствовать формату +7(000)000-0000.';
    phone.classList.add('errorValue');
    event.preventDefault();
  }

  if (!((/^[A-Za-z]+@[A-Za-z]+.[A-Za-z]+$/.test(email.value))
      || (/^[A-Za-z]+\.[A-Za-z]+@[A-Za-z]+.[A-Za-z]+$/.test(email.value))
      || (/^[A-Za-z]+-[A-Za-z]+@[A-Za-z]+.[A-Za-z]+$/.test(email.value)))) {
    emailError.innerHTML =
      'E-mail должен соответствовать форматам: mymail@mail.ru или my.mail@mail.ru, или my-mail@mail.ru';
    email.classList.add('errorValue');
    event.preventDefault();
  }

  if (!(/.+/.test(text.value))) {
    textError.innerHTML = 'Введите текст!';
    text.classList.add('errorValue');
    event.preventDefault();
  }
});