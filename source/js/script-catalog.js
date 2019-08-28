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
var webpMobile = header.querySelector("#webp-mobile");
var webpTablet = header.querySelector("#webp-tablet");
var strSrc = headerLogo.src;
var strSrcset = header.srcset;
var fl = true;

headerLogo.src = "img/logo-mobile-white@1x.png";
headerLogo.srcset = "img/logo-mobile-white@2x.png 2x";
sourceLogo.srcset = "img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x";
webpMobile.srcset = "img/logo-mobile-white@1x.webp 1x, img/logo-mobile-white@2x.webp 2x";
webpTablet.srcset = "img/logo-tablet-white@1x.webp 1x, img/logo-tablet-white@2x.webp 2x";

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
    headerLogo.srcset = "img/logo-mobile-blue@2x.png 2x";

    sourceLogo.srcset = "img/logo-tablet-blue@1x.png 1x, img/logo-tablet-blue@2x.png 2x";
    webpMobile.srcset = "img/logo-mobile-blue@1x.webp 1x, img/logo-mobile-blue@2x.webp 2x";
    webpTablet.srcset = "img/logo-tablet-blue@1x.webp 1x, img/logo-tablet-blue@2x.webp 2x";

    fl = false;
  } else {
    headerLogo.src = "img/logo-mobile-white@1x.png";
    headerLogo.srcset = "img/logo-mobile-white@2x.png 2x";
    sourceLogo.srcset = "img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x";
    webpMobile.srcset = "img/logo-mobile-white@1x.webp 1x, img/logo-mobile-white@2x.webp 2x";
    webpTablet.srcset = "img/logo-tablet-white@1x.webp 1x, img/logo-tablet-white@2x.webp 2x";

    fl = true;
  }

  for (var i = 0; i < menuButtonIcon.length; i++) {
    menuButtonIcon[i].classList.toggle("header__menu-icon--active");
  }

  mainMenu.classList.toggle("main-menu--open");
  menuBar.classList.toggle("header__scroll-wrap--menu-open");
  loginButton.classList.toggle("header__button-list--menu-open");
});

/* Фильтрация по странам */

var countryFilterButton = document.querySelector(".country-filter__button");
var buttonIcon = countryFilterButton.querySelectorAll(".country-filter__button-icon");
var buttonLabel = countryFilterButton.querySelectorAll(".country-filter__button-label");
var countryFilterButtonClose = document.querySelector(".country-filter__button--close");
var continents = document.querySelector(".country-filter__continents");
var countryFilterWrap = document.querySelector(".country-filter__wrap");

continents.classList.remove("country-filter__continents--nojs");
countryFilterWrap.classList.remove("country-filter__wrap--nojs");

for (var i = 0; i < buttonIcon.length; i++) {
  buttonIcon[i].classList.toggle("country-filter__button-icon--active");
}

for (var i = 0; i < buttonLabel.length; i++) {
  buttonLabel[i].classList.toggle("country-filter__button-label--active");
}

countryFilterButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  for (var i = 0; i < buttonIcon.length; i++) {
    buttonIcon[i].classList.toggle("country-filter__button-icon--active");
  }

  for (var i = 0; i < buttonLabel.length; i++) {
    buttonLabel[i].classList.toggle("country-filter__button-label--active");
  }

  continents.classList.toggle("country-filter__continents--open");
  countryFilterWrap.classList.toggle("country-filter__wrap--open");
});

countryFilterButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  for (var i = 0; i < buttonIcon.length; i++) {
    buttonIcon[i].classList.toggle("country-filter__button-icon--active");
  }

  for (var i = 0; i < buttonLabel.length; i++) {
    buttonLabel[i].classList.toggle("country-filter__button-label--active");
  }

  continents.classList.remove("country-filter__continents--open");
  countryFilterWrap.classList.remove("country-filter__wrap--open");
});

/* Фильтр попутчиков */

var filterButton = document.querySelectorAll(".filter__wrap-button");
var filterWrap = document.querySelectorAll(".filter__wrap");

for (var i = 0; i < filterWrap.length; i++) {
  filterWrap[i].classList.remove("filter__wrap--nojs");
}

for (var i = 0; i < filterButton.length; i++) {
  filterButton[i].addEventListener("click", setHandler(i), false);
}

function setHandler(i) {
  return function (evt) {
    evt.preventDefault();

    filterWrap[i].classList.toggle("filter__wrap--open");
  };
};
