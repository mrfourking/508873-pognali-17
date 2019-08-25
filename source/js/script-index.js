/*Главное меню */

var header = document.querySelector(".header");
var mainMenuButton = header.querySelector(".header__menu-button");
var menuButtonIcon = mainMenuButton.querySelectorAll(".header__menu-icon");
var mainMenu = header.querySelector(".main-menu");
var loginMenuButton = mainMenu.querySelector(".main-menu__button");
var menuBar = header.querySelector(".header__scroll-wrap");
var loginButton = header.querySelector(".header__button-list");

var headerLogo = header.querySelector(".header__logo");
var sourceLogo = header.querySelector("#tablet-logo");
var strSrc = headerLogo.src;
var strSrcset = header.srcset;
var fl = true;

headerLogo.src = "img/logo-mobile-white@1x.png";
headerLogo.srcset = "img/logo-mobile-white@2x.png";
sourceLogo.srcset = "img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x";

header.classList.remove("header--nojs");
mainMenuButton.classList.remove("header__menu-button--nojs")
mainMenu.classList.remove("main-menu--nojs");
loginMenuButton.classList.remove("main-menu__button--nojs");
menuBar.classList.remove("header__scroll-wrap--nojs");
loginButton.classList.remove("header__button-list--nojs");

mainMenuButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  /*Условие для переключения логотипа*/
  if (fl) {
    headerLogo.src = "img/logo-mobile-blue@1x.png";
    headerLogo.srcset = "img/logo-mobile-blue@2x.png";

    sourceLogo.srcset = "img/logo-tablet-blue@1x.png 1x, img/logo-tablet-blue@2x.png 2x";

    fl = false;
  } else {
    headerLogo.src = "img/logo-mobile-white@1x.png";
    headerLogo.srcset = "img/logo-mobile-white@2x.png";
    sourceLogo.srcset = "img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x";

    fl = true;
  }

  for (var i = 0; i < menuButtonIcon.length; i++) {
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

ratesButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  ratesBusiness.classList.add("rates__business--active");
});

ratesButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  ratesBusiness.classList.remove("rates__business--active");
});
