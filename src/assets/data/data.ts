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
import imgHotPizza from "../img/HotPizza/HotPizza-img.png";
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
import previewHotPizza from "../img/HotPizza/HotPizza-preview.png";
// Work
import arrowLeft from "../svg/arrow-left.svg";
import btnDemo from "../svg/btn-demo.svg";
import btnGitHub from "../svg/btn-git-hub.svg";
// ContactsPage
import contactsImg from "../img/contacts-img.png";
// aboutMePageData
import heroAboutMe from "../img/hero-about-me.png";
import rosnou from "../img/rosnou.png";
import frontend from "../img/frontend.png";

// Список меню Menu
export const menuList: menuListProps[] = [
  {
    id: 1,
    name: "Главная",
    url: "/",
  },
  {
    id: 2,
    name: "Примеры работы",
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
  subTitle: "Frontend разработчик",
  title: "<Государев Данила\u00A0/>",
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
  text: "Меня зовут Данила, я Frontend разработчик. В разработке 1.5 года. Я верстаю сайты по макету Figma и создаю web-приложения с помощью React.",
  btn: {
    text: "подробнее",
    path: "/about-me",
  },
};

// Содержимое секции WorkExamples
export const workExamplesData = {
  title: "<Мои работы />",
  btn: {
    text: "посмотреть все",
    link: "/works",
  },
};

// Содержимое секции TechStack
export const techStackData = {
  title: "<Tech Stack />",
  rows: [
    {
      id: 1,
      title: "Frontend",
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
  btnText: "подробнее",
  works: [
    {
      id: 1,
      category: 0,
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
      id: 3,
      category: 0,
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
      category: 0,
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
      id: 3,
      category: 1,
      name: "Hot Pizza",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vitae sapiente deleniti. Saepe odio, quis ex, minus quidem nam debitis at voluptate modi, labore alias nulla possimus esse obcaecati in?",
      preview: previewHotPizza,
      img: imgHotPizza,
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
};

// Содержимое страницы Work
export const workPageData = {
  btnBack: {
    text: "Все работы",
    icon: arrowLeft,
    url: "/works",
  },
  btnDemo: {
    text: "смотреть демо",
    icon: btnDemo,
  },
  btnGitHub: {
    text: "смотреть код",
    icon: btnGitHub,
  },
  sybTitle: "Инструменты",
};

export const contactsPageData = {
  title: "<Контакты />",
  email: "danidagosudarev@gmail.com",
  tel1: {
    tel: "+7 (916) 681-98-17",
    forLink: "+79166819817",
  },
  tel2: {
    tel: "+7 (993) 362-01-05",
    forLink: "+79933620105",
  },
  img: contactsImg,
};

export const aboutMePageData = {
  aboutMe: {
    title: "<Обо мне />",
    text: "Привет, меня зовут Данила, я Frontend разработчик. В разработке 1.5 года. Я верстаю сайты по макету Figma и создаю web-приложения с помощью React. Мне 19 лет, живу в Котельника, учусь в Москве.",
    img: {
      path: heroAboutMe,
      alt: "Госудаерв Данила",
    },
  },
  studies: {
    text: 'Я студент 2 курса РосНОУ (Российский Новый Университет). Учусь на направлении 09.03.01 Информатика и вычислительная техника, по специальности Безопасность информационных систем и вычислительной техники. Защитил курсовой проект на тему "Игра Arkanoid на C++".',
    img: {
      path: rosnou,
      alt: "РосНОУ",
    },
  },
  frontend: {
    text: 'В начале первого курса в 2022 году начал изучать верстку (HTML, CSS, SCSS) по видео с YouTube, в ноябре того же года поступил на курс WEB-разработчик онлайн школы 1T Sprint, в которой получил диплом о профессиональной переподготовке, защитив командный проект "ВяЖу". После верстки нескольких лендингов, прошел курс по JavaScript, сделав несколько проектов на чистом JS. В сентябре 2023 начал изучать React и его библиотеки по курсам. Изучив основы React, приступил к изучению TypeScript и основам nodeJS.',
    img: {
      path: frontend,
      alt: "frontend",
    },
  },
};
