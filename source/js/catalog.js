'use strict';

var removeMenuHideHiddenNoJs = document.querySelector('.menu-hide');
removeMenuHideHiddenNoJs.classList.remove('menu-hide__hidden-no-js');

var removeMenuHidelogoHiddenNoJs = document.querySelector('.menu-hide__logo');
removeMenuHidelogoHiddenNoJs.classList.remove('menu-hide__logo-hidden-no-js');

var removeMenuHideBurgerHiddenNoJs = document.querySelector('.menu-hide__button-burger');
removeMenuHideBurgerHiddenNoJs.classList.remove('menu-hide__burger-hidden-no-js');

var removeMenuLinkBtnHidden = document.querySelector('.menu__link-btn');
removeMenuLinkBtnHidden.classList.remove('menu__link-btn-hidden');

var removeMaterialsTriangleNoJs = document.querySelector('.materials__triangle');
removeMaterialsTriangleNoJs.classList.remove('materials__triangle-no-js');

var removeCityNoJs = document.querySelector('.city');
removeCityNoJs.classList.remove('city__no-js');

var removeCityWrapper = document.querySelector('.city__wrapper');
removeCityWrapper.classList.remove('city__wrapper-no-js');

var removeMaterialsBlockNoJs = document.querySelector('.materials__block');
removeMaterialsBlockNoJs.classList.remove('materials__block-no-js');

var removeMaterialsPlayerFixkNoJs = document.querySelector('.materials__player-fix');
removeMaterialsPlayerFixkNoJs.classList.remove('materials__player-fix-no-js');

var removeBottomCatalogkNoJs = document.querySelector('.bottom__catalog');
removeBottomCatalogkNoJs.classList.remove('bottom__catalog-no-js');



// закрывает главное меню
var closeMainMenu = document.querySelector('.menu__link-btn');
var closeMenuNavBlock = document.querySelector('.menu__block');

var closeBurgerMainMenuOne = document.querySelector('.menu-hide__hide');
var closeBurgerMainMenuTwo = document.querySelector('.menu-hide__logo');
var closeBurgerMainMenuThree = document.querySelector('.menu-hide__pic');

closeMenuNavBlock.classList.add('menu__hidden');
removeMenuLinkBtnHidden.classList.add('menu__link-btn-hidden');

closeMainMenu.addEventListener("click", function () {
  closeMenuNavBlock.classList.add('menu__hidden');
  removeMenuLinkBtnHidden.classList.add('menu__link-btn-hidden');
  closeBurgerMainMenuOne.classList.remove('menu-hide__hide-add');
  closeBurgerMainMenuTwo.classList.remove('menu-hide__logo-add');
  removeMenuHideBurgerHiddenNoJs.classList.remove('menu-hide__burger-hidden-hidden');
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
