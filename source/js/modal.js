'use strict';

/*
  По умлочнаию у модальных окон есть класс modal__hidden, скрывающий их,
  если же со скриптом будет что-то не так (например, он не загрузится),
  то модальные окна будут также скрыты благодая классу modal__hidden
*/
/*
  при нажатии на кнопку "Закрыть окно"
  закрывается моадльно окно "Ваш отзыв отправлен!"
*/
var closeModalOk = document.querySelector(".modal__button-ok");

var windowModalOk = document.querySelector(".modal__ok");

closeModalOk.addEventListener("click", function () {
  windowModalOk.classList.add("modal__hidden");
});
/*
  при нажатии на кнопку "Закрыть окно"
  закрывается моадльно окно "Ваш отзыв отправлен!"
*/
//
/*
  при нажатии на кнопку "ок"
  закрывается моадльно окно Что-то пошло не так!""
*/
var closeModalError = document.querySelector(".modal__button-error");

var windowModalError = document.querySelector(".modal__error");

closeModalError.addEventListener("click", function () {
  windowModalError.classList.add("modal__hidden");
});
/*
  при нажатии на кнопку "ок"
  закрывается модальное окно "Ваш отзыв отправлен!"
*/

/*
  — если отзыв успешно отправлен убирается
  класс modal__hidden и добавляется modal__ok-opened;
  — если какие-либо поля не заполнены, то убирается
  класс modal__hidden и добавляется modal__error-opened
  и добавляется класс reviews__input-error для обязательных полей.
*/

// имя
var ReviewsRequiredUserName = document.querySelector(".reviews__required-user-name");

ReviewsRequiredUserName.addEventListener("invalid", function () {
  if (ReviewsRequiredUserName.validity.tooShort) {
    ReviewsRequiredUserName.setCustomValidity("Обязательное поле. Имя должно состоять минимум из 1 символа");
    ReviewsRequiredUserName.classList.add("reviews__input-error");
    windowModalError.classList.remove("modal__hidden");
  } else if (ReviewsRequiredUserName.validity.valueMissing) {
    ReviewsRequiredUserName.setCustomValidity("Обязательное поле. Имя должно состоять минимум из 1 символа");
    ReviewsRequiredUserName.classList.add("reviews__input-error");
    windowModalError.classList.remove("modal__hidden");
  } else if (ReviewsRequiredUserName.validity.tooLong) {
    ReviewsRequiredUserName.setCustomValidity("Обязательное поле. Имя должно состоять минимум из 1 символа");
    ReviewsRequiredUserName.classList.add("reviews__input-error");
    windowModalError.classList.remove("modal__hidden");
  } else {
    ReviewsRequiredUserName.setCustomValidity("");
    ReviewsRequiredUserName.classList.remove("reviews__input-error");
  }
});

// имя

// фамилия
var ReviewsRequiredUserSurname = document.querySelector(".reviews__required-user-surname");

ReviewsRequiredUserSurname.addEventListener('invalid', function () {
  if (ReviewsRequiredUserSurname.validity.tooShort) {
    ReviewsRequiredUserSurname.setCustomValidity("Обязательное поле. Фамилия должна состоять минимум из 1 символа");
    ReviewsRequiredUserSurname.classList.add("reviews__input-error");
    windowModalError.classList.remove("modal__hidden");
  } else if (ReviewsRequiredUserSurname.validity.valueMissing) {
    ReviewsRequiredUserSurname.setCustomValidity("Обязательное поле. Фамилия должна состоять минимум из 1 символа");
    ReviewsRequiredUserSurname.classList.add("reviews__input-error");
    windowModalError.classList.remove("modal__hidden");
  } else if (ReviewsRequiredUserSurname.validity.tooLong) {
    ReviewsRequiredUserSurname.setCustomValidity("Обязательное поле. Фамилия должна состоять минимум из 1 символа");
    ReviewsRequiredUserSurname.classList.add("reviews__input-error");
    windowModalError.classList.remove("modal__hidden");
  } else {
    ReviewsRequiredUserSurname.setCustomValidity("");
    ReviewsRequiredUserSurname.classList.remove("reviews__input-error");
  }
});

// фамилия

// номер телефона
var ReviewsRequiredUserPhone = document.querySelector(".reviews__required-user-phone");

ReviewsRequiredUserPhone.addEventListener('invalid', function () {
  if (ReviewsRequiredUserPhone.validity.tooShort) {
    ReviewsRequiredUserPhone.setCustomValidity("Обязательное поле. Номер телефона должен состоять минимум из 6 символов");
    ReviewsRequiredUserPhone.classList.add("reviews__input-error");
    windowModalError.classList.remove("modal__hidden");
  } else if (ReviewsRequiredUserPhone.validity.valueMissing) {
    ReviewsRequiredUserPhone.setCustomValidity("");
    ReviewsRequiredUserPhone.classList.add("reviews__input-error");
    windowModalError.classList.remove("modal__hidden");
  } else if (ReviewsRequiredUserPhone.validity.tooLong) {
    ReviewsRequiredUserPhone.setCustomValidity("Обязательное поле. Номер телефона должен состоять минимум из 6 символов, максимум из 11.");
    ReviewsRequiredUserPhone.classList.add("reviews__input-error");
    windowModalError.classList.remove("modal__hidden");
  } else {
    ReviewsRequiredUserPhone.setCustomValidity("");
    ReviewsRequiredUserPhone.classList.remove("reviews__input-error");
  }
});

// почта
var ReviewsRequiredUserEmail = document.querySelector('.reviews__required-user-email');

ReviewsRequiredUserEmail.addEventListener('invalid', function () {
  if (ReviewsRequiredUserEmail.validity.tooShort) {
    ReviewsRequiredUserEmail.setCustomValidity("Обязательное поле. Почта должна быть в формате example@example.ru");
    windowModalError.classList.remove("modal__hidden");
  } else if (ReviewsRequiredUserEmail.validity.valueMissing) {
    ReviewsRequiredUserEmail.setCustomValidity("Обязательное поле. Почта должна быть в формате example@example.ru");
    ReviewsRequiredUserEmail.classList.add("reviews__input-error");
    windowModalError.classList.remove("modal__hidden");
  } else if (ReviewsRequiredUserEmail.validity.tooLong) {
    ReviewsRequiredUserEmail.setCustomValidity("Обязательное поле. Почта должна быть в формате example@example.ru");
    ReviewsRequiredUserEmail.classList.add("reviews__input-error");
    windowModalError.classList.remove("modal__hidden");
  } else {
    ReviewsRequiredUserEmail.setCustomValidity("");
    ReviewsRequiredUserEmail.classList.remove("reviews__input-error");
  }
});
// почта

/*
  при клике на кнопку "Отправить отзыв"
  появляется всплывающее окно "Ваш отзыв отправлен!"
  или "Что-то пошло не так!" в зависимотси от того,
  заполнены ли все обязательные опля
 */
var goReviewsPin = document.querySelector('.reviews__pin');

goReviewsPin.addEventListener("click", function () {
  if (ReviewsRequiredUserPhone.value.length >= 6 & ReviewsRequiredUserSurname.value.length >= 1 & ReviewsRequiredUserName.value.length >= 1 & ReviewsRequiredUserEmail.value.length >= 5) {
    windowModalOk.classList.remove("modal__hidden");
  } else {
    ReviewsRequiredUserSurname.setCustomValidity("");
    ReviewsRequiredUserPhone.setCustomValidity("");
    ReviewsRequiredUserName.setCustomValidity("");
    windowModalError.classList.remove("modal__hidden");
    ReviewsRequiredUserEmail.classList.add("reviews__input-error");
    ReviewsRequiredUserName.classList.add("reviews__input-error");
    ReviewsRequiredUserSurname.classList.add("reviews__input-error");
    ReviewsRequiredUserPhone.classList.add("reviews__input-error");
  }
});
