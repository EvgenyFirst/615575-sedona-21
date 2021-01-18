'use strict';

var removeMenuHideHiddenNoJs = document.querySelector(".menu-hide");
removeMenuHideHiddenNoJs.classList.remove("menu-hide__hidden-no-js");
var removeMenuHidelogoHiddenNoJs = document.querySelector(".menu-hide__logo");
removeMenuHidelogoHiddenNoJs.classList.remove("menu-hide__logo-hidden-no-js");
var removeMenuHideBurgerHiddenNoJs = document.querySelector(".menu-hide__button-burger");
removeMenuHideBurgerHiddenNoJs.classList.remove("menu-hide__burger-hidden-no-js");
var removeMenuLinkBtnHidden = document.querySelector(".menu__link-btn");
removeMenuLinkBtnHidden.classList.remove("menu__link-btn-hidden");

// закрывает главное меню
var closeMainMenu = document.querySelector(".menu__link-btn");
var closeMenuNavBlock = document.querySelector(".menu__block");

var closeBurgerMainMenuOne = document.querySelector(".menu-hide__hide");
var closeBurgerMainMenuTwo = document.querySelector(".menu-hide__logo");
var closeBurgerMainMenuThree = document.querySelector(".menu-hide__pic");

closeMenuNavBlock.classList.add("menu__hidden");
removeMenuLinkBtnHidden.classList.remove("menu__link-btn-hidden");

closeMainMenu.addEventListener("click", function () {
  closeMenuNavBlock.classList.add("menu__hidden");
  removeMenuLinkBtnHidden.classList.add("menu__link-btn-hidden");
  closeBurgerMainMenuOne.classList.remove("menu-hide__hide-add");
  closeBurgerMainMenuTwo.classList.remove("menu-hide__logo-add");
  removeMenuHideBurgerHiddenNoJs.classList.remove("menu-hide__burger-hidden-hidden");
});
// закрывает главное меню
//
// открывает главное меню
var openMainMenu = document.querySelector('.menu-hide__button-burger');
var closeBurgerMainMenu = document.querySelector('.welcome');

openMainMenu.addEventListener("click", function () {
  closeMenuNavBlock.classList.remove('menu__hidden');
  removeMenuHideBurgerHiddenNoJs.classList.add('menu-hide__burger-hidden-hidden');
  closeBurgerMainMenuOne.classList.add('menu-hide__hide-add');
  closeBurgerMainMenuTwo.classList.add('menu-hide__logo-add');
  removeMenuLinkBtnHidden.classList.remove('menu__link-btn-hidden');
});
// открывает главное меню
