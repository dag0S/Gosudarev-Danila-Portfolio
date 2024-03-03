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
// WorkExamples
import imgVoiceTagLab from "../img/VoiceTagLab/VoiceTagLab-img.png";
import hotPizza from "../img/slide-2.png";
// TechStack
import react from "../svg/icons-tech/react.svg";
import redux from "../svg/icons-tech/redux.svg";
import router from "../svg/icons-tech/router.svg";
import js from "../svg/icons-tech/js.svg";
import ts from "../svg/icons-tech/ts.svg";
import html from "../svg/icons-tech/html.svg";
import css from "../svg/icons-tech/css.svg";
import sass from "../svg/icons-tech/sass.svg";
import figma from "../svg/icons-tech/figma.svg";
import photoshop from "../svg/icons-tech/photoshop.svg";
import npm from "../svg/icons-tech/npm.svg";
import gulp from "../svg/icons-tech/gulp.svg";
import git from "../svg/icons-tech/git.svg";
import github from "../svg/icons-tech/github.svg";
import vite from "../svg/icons-tech/vite.png";
// Works
import previewVoiceTagLab from "../img/VoiceTagLab/VoiceTagLab-preview.png";

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
    text: "связаться",
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

// Содержимое секции AboutMe
export const aboutMeData = {
  title: "<Обо мне />",
  text: "Меня зовут Данила, я Front-end разработчик. В разработке 1.5 года. Я верстаю сайты по макету Figma и создаю web-приложения с помощью React.",
  btn: {
    text: "подробнее",
    path: "/about-me",
  },
};

// Содержимое секции WorkExamples
export const workExamplesData = {
  title: "<Мои работы />",
  slides: [
    {
      id: 1,
      img: imgVoiceTagLab,
      alt: "Voice Tag Lab",
    },
    {
      id: 2,
      img: hotPizza,
      alt: "Hot Pizza",
    },
  ],
};

// Содержимое секции TechStack
export const techStackData = {
  title: "<Tech Stack />",
  rows: [
    {
      id: 1,
      title: "Front-end",
      icons: [
        {
          id: 1,
          icon: react,
          name: "React",
        },
        {
          id: 2,
          icon: redux,
          name: "Redux Toolkit",
        },
        {
          id: 8,
          icon: router,
          name: "React Router",
        },
        {
          id: 3,
          icon: js,
          name: "JavaScript",
        },
        {
          id: 4,
          icon: ts,
          name: "TypeScript",
        },
        {
          id: 5,
          icon: html,
          name: "HTML",
        },
        {
          id: 6,
          icon: css,
          name: "CSS",
        },
        {
          id: 7,
          icon: sass,
          name: "SASS/SCSS",
        },
      ],
    },
    {
      id: 2,
      title: "Graphics editor",
      icons: [
        {
          id: 1,
          icon: figma,
          name: "Figma",
        },
        {
          id: 2,
          icon: photoshop,
          name: "Photoshop",
        },
      ],
    },
    {
      id: 3,
      title: "Other",
      icons: [
        {
          id: 1,
          icon: npm,
          name: "npm",
        },
        {
          id: 2,
          icon: gulp,
          name: "Gulp",
        },
        {
          id: 3,
          icon: git,
          name: "git",
        },
        {
          id: 4,
          icon: github,
          name: "gitHub",
        },
        {
          id: 5,
          icon: vite,
          name: "Vite",
        },
      ],
    },
  ],
};

// Содержимое секции Newsletter
export const newsletterData = {
  title: "Подпишитесь на E-mail рассылку",
  text: "Если хотиет быть в курсе последних новостей и скидок - заполните форму ниже и оформите бесплатную E-mail рассылку!",
  placeholder: "Ваш E-mail",
  btnText: "отправить",
};

// Содержимое страницы Works
export const worksPageData = {
  title: "<Примеры работ />",
  categories: ["верстка", "web-app"],
  works: {
    layouts: [
      {
        id: 1,
        name: "Voice Tag Lab",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vitae sapiente deleniti. Saepe odio, quis ex, minus quidem nam debitis at voluptate modi, labore alias nulla possimus esse obcaecati in?",
        preview: previewVoiceTagLab,
        img: imgVoiceTagLab,
        linkGitHub: "https://github.com/dag0S/voice-tag-lab",
        linkDemo: "https://warm-seahorse-f0148f.netlify.app/",
        stack: [
          {
            id: 3,
            icon: js,
            name: "JavaScript",
          },
          {
            id: 5,
            icon: html,
            name: "HTML",
          },
          {
            id: 6,
            icon: css,
            name: "CSS",
          },
          {
            id: 7,
            icon: sass,
            name: "SASS/SCSS",
          },
          {
            id: 8,
            icon: vite,
            name: "Vite",
          },
        ],
      },
      {
        id: 2,
        name: "Voice Tag Lab",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vitae sapiente deleniti. Saepe odio, quis ex, minus quidem nam debitis at voluptate modi, labore alias nulla possimus esse obcaecati in?",
        preview: previewVoiceTagLab,
        img: imgVoiceTagLab,
        linkGitHub: "https://github.com/dag0S/voice-tag-lab",
        linkDemo: "https://warm-seahorse-f0148f.netlify.app/",
        stack: [
          {
            id: 3,
            icon: js,
            name: "JavaScript",
          },
          {
            id: 5,
            icon: html,
            name: "HTML",
          },
          {
            id: 6,
            icon: css,
            name: "CSS",
          },
          {
            id: 7,
            icon: sass,
            name: "SASS/SCSS",
          },
          {
            id: 8,
            icon: vite,
            name: "Vite",
          },
        ],
      },
    ],
  },
};
