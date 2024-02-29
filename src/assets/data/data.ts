// Menu
import { menuListProps, socialsListProps } from "../types/types";
// Socials
import { IconsID } from "../../components/Socials/IconsSVG";
// Promo
import hero from "../../assets/img/promo-hero.png";
import promoHTML from "../svg/promoHTML.svg";
import promoJS from "../svg/promoJS.svg";
import promoTS from "../svg/promoTS.svg";
import promoRedux from "../svg/promoRedux.svg";
import promoCSS from "../svg/promoCSS.svg";
import promoReact from "../svg/promoReact.svg";

// Список меню Menu
export const menuList: menuListProps[] = [
  {
    id: 1,
    name: "Главная",
    url: "/",
  },
  {
    id: 2,
    name: "Работы",
    url: "/works",
  },
  {
    id: 3,
    name: "Обо мне",
    url: "/about-me",
  },
  {
    id: 4,
    name: "Контакты",
    url: "/contacts",
  },
  {
    id: 5,
    name: "GitHub",
    url: "https://github.com/dag0S",
    withIcon: true,
  },
];

// Содержимое компонента Socials
export const socialsList: socialsListProps[] = [
  {
    id: 1,
    iconId: IconsID.VK,
    url: "https://vk.com/tovar_dlr_givotnblx",
  },
  {
    id: 2,
    iconId: IconsID.TG,
    url: "https://t.me/DanilaGosudarev",
  },
  {
    id: 3,
    iconId: IconsID.WHATS_APP,
    url: "https://wa.me/+79166819817",
  },
];

// Содержимое секции Promo
export const promoData = {
  subTitle: "Front-end разработчик",
  title: "<Государев \nДанила />",
  text: "Созданию современные адаптивные сайты и WEB-приложения.",
  btn: {
    text: "Связаться",
    path: "/contacts",
  },
  hero: {
    img: hero,
    alt: "Государев Данила",
  },
  icons: {
    html: {
      icon: promoHTML,
      alt: "html",
    },
    js: {
      icon: promoJS,
      alt: "js",
    },
    ts: {
      icon: promoTS,
      alt: "ts",
    },
    redux: {
      icon: promoRedux,
      alt: "redux",
    },
    css: {
      icon: promoCSS,
      alt: "css",
    },
    react: {
      icon: promoReact,
      alt: "react",
    },
  },
};

export const aboutMeData = {
  title: "<Обо мне />",
  text: "Меня зовут Данила, я Front-end разработчик. В разработке 1.5 года. Я верстаю сайты по макету Figma и создаю web-приложения с помощью React.",
  btn: {
    text: "подробнее",
    path: "/about-me",
  },
};
