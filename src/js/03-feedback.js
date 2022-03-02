// Отслеживай на форме событие input,
//     и каждый раз записывай в локальное хранилище
//     объект с полями email и message,
//     в которых сохраняй текущие значения полей формы.
//     Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища,
//     и если там есть сохраненные данные,
//         заполняй ими поля формы.В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы,
//     а также выводи объект с полями email, message
//     и текущими их значениями в консоль.
// Сделай так,
//     чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
//     Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';
const form = document.querySelector('form.feedback-form');

const email = form.elements.email;
const message = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

onPageLoading();

form.addEventListener('input', throttle(onInputFn, 500));
form.addEventListener('submit', onSubmit);

function onInputFn() {
  const formData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onPageLoading() {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!parsedData) return;

  email.value = parsedData.email;
  message.value = parsedData.message;
}

function onSubmit(e) {
  e.preventDefault();
  if (!email.value || !message.value) {
    return alert('Внимание! Необходимо заполнить все поля формы!');
  }
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}
