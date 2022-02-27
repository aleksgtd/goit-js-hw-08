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

import _ from 'lodash';
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const form = document.querySelector('form.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

onPageLoading();

form.addEventListener('input', _.throttle(onInputFn, 500));
form.addEventListener('submit', onSubmit);

const dataObj = {};

function onInputFn(event) {
  dataObj[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObj));
}

function onPageLoading() {
  if (localStorage[STORAGE_KEY]) {
    const localStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (localStorageData['email']) {
      email.value = JSON.parse(localStorage.getItem(STORAGE_KEY))['email'];
    }
    if (localStorageData['message']) {
      message.value = JSON.parse(localStorage.getItem(STORAGE_KEY))['message'];
    }
  }
}

function onSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}
