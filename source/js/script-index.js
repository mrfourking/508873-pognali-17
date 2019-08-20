/*Главное меню */

var header = document.querySelector(".header");
var mainMenuButton = header.querySelector(".header__menu-button");
var menuButtonIcon = mainMenuButton.querySelectorAll(".header__menu-icon");
var mainMenu = header.querySelector(".main-menu");
var loginMenuButton = mainMenu.querySelector(".main-menu__button");
var menuBar = header.querySelector(".header__scroll-wrap");
var loginButton = header.querySelector(".header__button-list");

header.classList.remove("header--nojs");
mainMenuButton.classList.remove("header__menu-button--nojs")
mainMenu.classList.remove("main-menu--nojs");
loginMenuButton.classList.remove ("main-menu__button--nojs");
menuBar.classList.remove("header__scroll-wrap--nojs");
loginButton.classList.remove("header__button-list--nojs");

mainMenuButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  for(var i=0; i < menuButtonIcon.length; i++){
    menuButtonIcon[i].classList.toggle("header__menu-icon--active");
  }

  mainMenu.classList.toggle("main-menu--open");
  menuBar.classList.toggle("header__scroll-wrap--menu-open");
  loginButton.classList.toggle("header__button-list--menu-open");
});

/* Бизнес-тарифы */

var ratesButton = document.querySelector(".rates__button");
var ratesBusiness = document.querySelector(".rates__business");
var ratesButtonClose = ratesBusiness.querySelector(".rates__button");

ratesButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  ratesBusiness.classList.add("rates__business--active");
});

ratesButtonClose.addEventListener("click", function(evt) {
  evt.preventDefault();

  ratesBusiness.classList.remove("rates__business--active");
});
