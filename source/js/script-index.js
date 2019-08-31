/*Главное меню */

var header = document.querySelector(".header__container");
var mainMenuButton = header.querySelector(".header__menu-button");
var menuButtonIcon = mainMenuButton.getElementsByClassName("header__menu-icon");
var mainMenu = header.querySelector(".main-menu");
var mainmenuList = mainMenu.querySelector(".main-menu__list");
var mainMenuLink = mainMenu.getElementsByClassName("main-menu__link");
var loginMenuButton = mainMenu.querySelector(".main-menu__button");
var menuBar = header.querySelector(".header__scroll-wrap");
var loginButton = header.querySelector(".header__button-list");
var headerWrap = document.getElementsByClassName("header__scroll-wrap");

var headerLogo = header.querySelector(".header__logo");
var sourceLogo = header.querySelector("#tablet-logo");
var desktopLogo = header.querySelector("#desktop-logo");
var webpMobile = header.querySelector("#webp-mobile");
var webpTablet = header.querySelector("#webp-tablet");
var webpDesktop = header.querySelector("#webp-desktop");
var strSrc = headerLogo.src;
var strSrcset = header.srcset;
var fl = true;

headerLogo.src = "img/logo-mobile-white@1x.png";
headerLogo.srcset = "img/logo-mobile-white@2x.png 2x";
sourceLogo.srcset = "img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x";
webpMobile.srcset = "img/logo-mobile-white@1x.webp 1x, img/logo-mobile-white@2x.webp 2x";
webpTablet.srcset = "img/logo-tablet-white@1x.webp 1x, img/logo-tablet-white@2x.webp 2x";

header.classList.remove("header__container--nojs");
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

    headerWrap[0].style.background = "#ffffff";

    fl = false;
  } else {
    if (window.pageYOffset == 0) {
      headerLogo.srcset = "img/logo-mobile-white@1x.png 1x, img/logo-mobile-white@2x.png 2x";
      sourceLogo.srcset = "img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x";
      webpMobile.srcset = "img/logo-mobile-white@1x.webp 1x, img/logo-mobile-white@2x.webp 2x";
      webpTablet.srcset = "img/logo-tablet-white@1x.webp 1x, img/logo-tablet-white@2x.webp 2x";

      if (window.screen.availWidth >= 768 && window.screen.availWidth < 1440) {
        headerWrap[0].style.background = "#182044";
      } else {
        headerWrap[0].style.background = "#161c35";
      }
    }

    fl = true;
  }

  for (var i = 0; i < menuButtonIcon.length; i++) {
    menuButtonIcon[i].classList.toggle("header__menu-icon--active");
  }

  mainMenu.classList.toggle("main-menu--open");
  menuBar.classList.toggle("header__scroll-wrap--menu-open");
  loginButton.classList.toggle("header__button-list--menu-open");

});

window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 0) {
    headerWrap[0].style.background = "rgb(255,255,255)";
    menuButtonIcon[0].style.fill = "#cccccc";

    if (window.screen.availWidth >= 1440) {
      for (var i = 0; i < mainMenuLink.length; i++) {
        mainMenuLink[i].style.color = "#192144";
      }
      mainmenuList.classList.add("main-menu__list--scrolled");
    }

    headerLogo.srcset = "img/logo-mobile-blue@1x.png 1x, img/logo-mobile-blue@2x.png 2x";

    sourceLogo.srcset = "img/logo-tablet-blue@1x.png 1x, img/logo-tablet-blue@2x.png 2x";
    desktopLogo.srcset = "img/logo-desktop-blue@1x.png 1x, img/logo-desktop-blue@2x.png 2x";
    webpMobile.srcset = "img/logo-mobile-blue@1x.webp 1x, img/logo-mobile-blue@2x.webp 2x";
    webpTablet.srcset = "img/logo-tablet-blue@1x.webp 1x, img/logo-tablet-blue@2x.webp 2x";
    webpDesktop.srcset = "img/logo-desktop-blue@1x.webp 1x, img/logo-desktop-blue@2x.webp 2x";

  } else {
    headerWrap[0].style.background = "#161c35";
    headerLogo.srcset = "img/logo-mobile-white@1x.png 1x, img/logo-mobile-white@2x.png 2x";
    sourceLogo.srcset = "img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x";
    desktopLogo.srcset = "img/logo-desktop-white@1x.png 1x, img/logo-desktop-white@2x.png 2x";
    webpMobile.srcset = "img/logo-mobile-white@1x.webp 1x, img/logo-mobile-white@2x.webp 2x";
    webpTablet.srcset = "img/logo-tablet-white@1x.webp 1x, img/logo-tablet-white@2x.webp 2x";
    webpDesktop.srcset = "img/logo-desktop-white@1x.webp 1x, img/logo-desktop-white@2x.webp 2x";

    if (window.screen.availWidth >= 768 && window.screen.availWidth < 1440) {
      headerWrap[0].style.background = "#182044";
    }

    if (window.screen.availWidth >= 1440) {
      for (var i = 0; i < mainMenuLink.length; i++) {
        mainMenuLink[i].style.color = "white";
      }
      mainmenuList.classList.remove("main-menu__list--scrolled");
    }

    menuButtonIcon[0].style.fill = "white";
  }
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
