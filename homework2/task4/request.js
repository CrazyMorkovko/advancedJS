window.onload = () => {
  document.getElementById('success').addEventListener('click', () => {
    fetch("success.json").then(result => {
      return result.json();
    })
      .then(data => {
        getResult(data);
      })

  });

  document.getElementById('error').addEventListener('click', () => {
    fetch("error.json").then(result => {
      return result.json();
    })
      .then(data => {
        getResult(data);
      })
  })
};

/**
 * Функция, которая выводит результат запроса на страницу.
 * @param data Объект с ответом
 */
function getResult(data) {
  let div = document.getElementById('result');
  if (data.result === "success") {
    div.innerHTML = 'Your request was successful.';
  } else {
    div.innerHTML = 'Your request failed.';
  }
}
