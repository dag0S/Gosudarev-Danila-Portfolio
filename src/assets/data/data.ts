// Menu
import { menuListProps, socialsListProps } from "../types/types";
// Socials
import { IconsID } from "../../components/Socials/IconsSVG";
// Promo
import hero from "../../assets/img/promo-hero.png";
import tinyHero from "../../assets/img/tinyImg/promo-hero-tiny.png";
import promoHTML from "../svg/promoHTML.svg";
import promoJS from "../svg/promoJS.svg";
import promoTS from "../svg/promoTS.svg";
import promoRedux from "../svg/promoRedux.svg";
import promoCSS from "../svg/promoCSS.svg";
import promoReact from "../svg/promoReact.svg";
// WorkExamples
import imgVoiceTagLab from "../img/VoiceTagLab/VoiceTagLab-img.png";
import imgHotPizza from "../img/HotPizza/HotPizza-img.png";
import imgLamborghini from "../img/Lamborghini/Lamborghini-img.png";
import imgOculus from "../img/Oculus/Oculus-img.png";
import imgHooBank from "../img/HooBank/HooBank-img.png";
import imgLoftHouse from "../img/LoftHouse/LoftHouse-img.png";
import imgDMLeasing from "../img/DMLeasing/DMLeasing-img.png";
import imgVyazhu from "../img/Vyazhu/Vyazhu-img.png";
import imgGosudarevDanila from "../img/GosudarevDanila/GosudarevDanila-img.png";
import imgLibSpace from "../img/LibSpace/LibSpace-img.png";
import imgAuction from "../img/Auction/Auction-img.png";
import imgNextPizza from "../img/NextPizza/NextPizza-img.png";
import imgTechWave from "../img/TechWave/TechWave-img.png";
// Works
import previewVoiceTagLab from "../img/VoiceTagLab/VoiceTagLab-preview.jpg";
import tinyPreviewVoiceTagLab from "../img/VoiceTagLab/VoiceTagLab-preview-min.jpg";
import previewHotPizza from "../img/HotPizza/HotPizza-preview.jpg";
import tinyPreviewHotPizza from "../img/HotPizza/HotPizza-preview-min.jpg";
import previewLamborghini from "../img/Lamborghini/Lamborghini-preview.jpg";
import tinyPreviewLamborghini from "../img/Lamborghini/Lamborghini-preview-min.jpg";
import previewOculus from "../img/Oculus/Oculus-preview.jpg";
import tinyPreviewOculus from "../img/Oculus/Oculus-preview-min.jpg";
import previewHooBank from "../img/HooBank/HooBank-preview.jpg";
import tinyPreviewHooBank from "../img/HooBank/HooBank-preview-min.jpg";
import previewLoftHouse from "../img/LoftHouse/LoftHouse-preview.jpg";
import tinyPreviewLoftHouse from "../img/LoftHouse/LoftHouse-preview-min.jpg";
import previewDMLeasing from "../img/DMLeasing/DMLeasing-preview.jpg";
import tinyPreviewDMLeasing from "../img/DMLeasing/DMLeasing-preview-min.jpg";
import previewVyazhu from "../img/Vyazhu/Vyazhu-preview.jpg";
import tinyPreviewVyazhu from "../img/Vyazhu/Vyazhu-preview-min.jpg";
import previewGosudarevDanila from "../img/GosudarevDanila/GosudarevDanila-preview.jpg";
import tinyPreviewGosudarevDanila from "../img/GosudarevDanila/GosudarevDanila-preview-min.jpg";
import previewLibSpace from "../img/LibSpace/LibSpace-preview.jpg";
import previewAuction from "../img/Auction/Auction-preview.jpg";
import previewNextPizza from "../img/NextPizza/NextPizza-preview.jpg";
import previewTechWave from "../img/TechWave/TechWave-preview.jpg";
// Work
import arrowLeft from "../svg/arrow-left.svg";
import btnDemo from "../svg/btn-demo.svg";
import btnGitHub from "../svg/btn-git-hub.svg";
// ContactsPage
import contactsImg from "../img/contacts-img.jpg";
import tinyContactsImg from "../../assets/img/tinyImg/contacts-img-tiny.jpg";
// aboutMePageData
import heroAboutMe from "../img/hero-about-me.png";
import tinyHeroAboutMe from "../../assets/img/tinyImg/hero-about-me-tiny.png";
import rosnou from "../img/rosnou.jpg";
import tinyRosnou from "../../assets/img/tinyImg/rosnou-tiny.jpg";
import frontend from "../img/frontend.jpg";
import tinyFrontend from "../../assets/img/tinyImg/frontend-tiny.jpg";
// Эл-ты тех. скилла
import { listTechs } from "./listTechs";

// Список меню Menu
export const menuList: menuListProps[] = [
  {
    id: 1,
    name: "Главная",
    url: "/",
  },
  {
    id: 2,
    name: "Портфолио",
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
    url: "https://vk.com/dag0s",
  },
  {
    id: 2,
    iconId: IconsID.TG,
    url: "https://t.me/DanilaGosudarev",
  },
  {
    id: 3,
    iconId: IconsID.WHATS_APP,
    url: "https://wa.me/+79933620105",
  },
];

// Содержимое секции Promo
export const promoData = {
  subTitle: "Frontend разработчик",
  title: "<Государев Данила\u00A0/>",
  text1: "Созданию современные адаптивные",
  text2: "сайты и WEB-приложения.",
  btn: {
    text: "связаться",
    path: "/contacts",
  },
  hero: {
    img: hero,
    tinyImg: tinyHero,
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
  text: "Меня зовут Данила, я Frontend разработчик. В разработке 2.5 года. Я верстаю сайты по макету Figma и создаю web-приложения с помощью React, NextJS и ExpressJS.",
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
        listTechs.nextJs,
        listTechs.react,
        listTechs.redux,
        listTechs.router,
        listTechs.tailwind,
        listTechs.typescript,
        listTechs.javascript,
        listTechs.html,
        listTechs.css,
        listTechs.sass,
        listTechs.jest,
        listTechs.storybook,
        listTechs.figma,
        listTechs.photoshop,
      ],
    },
    {
      id: 2,
      title: "Backend",
      icons: [
        listTechs.nodeJs,
        listTechs.expressJs,
        listTechs.prisma,
        listTechs.postgresql,
      ],
    },
    {
      id: 3,
      title: "Other",
      icons: [
        listTechs.npm,
        listTechs.webpack,
        listTechs.gulp,
        listTechs.git,
        listTechs.gitHub,
        listTechs.vite,
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
  title: "<Портфолио />",
  categories: ["Web-app","Верстка"],
  btnText: "подробнее",
  works: [
    {
      id: 1,
      category: 1,
      name: "Voice Tag Lab",
      desc: "Проект Voice Tag Lab - это незаменимая вещь для каждого битмейкера, с возможностью выбрать любой из ихголосов, и выделиться.",
      preview: previewVoiceTagLab,
      tinyPreview: tinyPreviewVoiceTagLab,
      img: imgVoiceTagLab,
      linkFrontendGitHub: "https://github.com/dag0S/voice-tag-lab",
      linkDemo: "https://warm-seahorse-f0148f.netlify.app/",
      stack: [
        listTechs.html,
        listTechs.css,
        listTechs.sass,
        listTechs.javascript,
        listTechs.vite,
      ],
    },
    {
      id: 3,
      category: 1,
      name: "Lamborghini",
      desc: "Итальянская компания, производитель спортивных автомобилей под маркой Lamborghini. Данный лендинг информирует о гранд-финале гонок.",
      preview: previewLamborghini,
      tinyPreview: tinyPreviewLamborghini,
      img: imgLamborghini,
      linkFrontendGitHub: "https://github.com/dag0S/Lamborghini",
      linkDemo: "https://lamborghini-demo.netlify.app/",
      stack: [
        listTechs.html,
        listTechs.css,
        listTechs.sass,
        listTechs.javascript,
        listTechs.gulp,
      ],
    },
    {
      id: 2,
      category: 1,
      name: "Oculus",
      desc: "Oculus - это очки виртуальной реальности будущего. Данный страница рекламирует данный продукт.",
      preview: previewOculus,
      tinyPreview: tinyPreviewOculus,
      img: imgOculus,
      linkFrontendGitHub: "https://github.com/dag0S/Oculus",
      linkDemo: "https://oculus-demo-1-0-1.netlify.app/",
      stack: [
        listTechs.html,
        listTechs.css,
        listTechs.sass,
        listTechs.javascript,
        listTechs.gulp,
      ],
    },
    {
      id: 4,
      category: 1,
      name: "HooBank",
      desc: "HooBank – инновационный банк. На этом лендинге мы рассказываем о возможностях и фичах этого банка. Сайт создан с использованием React и библиотеки стилей Tailwind.",
      preview: previewHooBank,
      tinyPreview: tinyPreviewHooBank,
      img: imgHooBank,
      linkFrontendGitHub: "https://github.com/dag0S/HooBank",
      linkDemo: "https://genuine-griffin-680248.netlify.app",
      stack: [
        listTechs.react,
        listTechs.javascript,
        listTechs.vite,
        listTechs.html,
        listTechs.css,
      ],
    },
    {
      id: 5,
      category: 1,
      name: "LoftHouse",
      desc: "LoftHouse – это жилой комплекс, расположенный в историческом центре города. Данный одностраничный сайт призван познакомить вас со всеми преимуществами этого места.",
      preview: previewLoftHouse,
      tinyPreview: tinyPreviewLoftHouse,
      img: imgLoftHouse,
      linkFrontendGitHub: "https://github.com/dag0S/loft-house",
      linkDemo: "https://loft-house-demo.netlify.app/",
      stack: [
        listTechs.html,
        listTechs.css,
        listTechs.sass,
        listTechs.javascript,
        listTechs.gulp,
      ],
    },
    {
      id: 6,
      category: 1,
      name: "D&M Leasing",
      desc: "D&M Leasing – сайт по приобретению автомобилей, который состоит из нескольких страниц, написанных на чистом HTML и CSS.",
      preview: previewDMLeasing,
      tinyPreview: tinyPreviewDMLeasing,
      img: imgDMLeasing,
      linkFrontendGitHub: "https://github.com/dag0S/Cars",
      linkDemo: "https://cars-demo-1-0-1.netlify.app/",
      stack: [
        listTechs.html,
        listTechs.css,
        listTechs.sass,
        listTechs.javascript,
        listTechs.gulp,
      ],
    },
    {
      id: 7,
      category: 1,
      name: "ВяЖу",
      desc: "ВяЖу - это один из первых моих проектов, над которым я работал в команде на курсе по web-разработке. Сайт из себя представляет небольшой сборник статей и видео посвященных вязанию и шитью. Я работал над проектом «ВяЖу» в команде на курсе по веб-разработке. Это был один из моих первых проектов. Сайт представляет собой небольшой сборник статей и видео о вязании и шитье.",
      preview: previewVyazhu,
      tinyPreview: tinyPreviewVyazhu,
      img: imgVyazhu,
      linkFrontendGitHub: "https://github.com/dag0S/vyazhu",
      linkDemo: "https://iw966675.sprint.1t.ru/index.php",
      stack: [
        listTechs.html,
        listTechs.css,
        listTechs.sass,
        listTechs.javascript,
        listTechs.php,
      ],
    },
    {
      id: 8,
      category: 0,
      name: "Lib Space",
      desc: "Lib Space — это моя курсовая работа, которую я пишу на третьем курсе. В ней я реализую модель ААА (Авторизация, Аутентификация, Учёт) с помощью ExpressJS, JWT токенов и Cookies. В проекте также задействованы NextJS, Tailwind, shandcn и множество других библиотек. Реализован dashboard для ролей пользователя админ и библиотекарь, в котором можно добавлять, изменять и удалять данные (пользователи, книги, жанры и т. д.)",
      preview: previewLibSpace,
      tinyPreview: tinyPreviewHotPizza,
      img: imgLibSpace,
      linkFrontendGitHub: "https://github.com/dag0S/libspace_frontend",
      linkBackendGitHub: "https://github.com/dag0S/libspace_backend",
      stack: [
        listTechs.nextJs,
        listTechs.react,
        listTechs.redux,
        listTechs.tailwind,
        listTechs.typescript,
        listTechs.javascript,
        listTechs.expressJs,
        listTechs.prisma,
      ],
    },
    {
      id: 9,
      category: 0,
      name: "Auction for streamers",
      desc: "Этот сайт предназначен для взаимодействия между стримером и его аудиторией, позволяя им совместно принимать решения во время стрима. Будь то выбор фильма, сериала или игры для развлечения. Он разработан с использованиемследующих технологий: React, Redux Toolkit, NextJS, Typescript, React Hook Form и Framer Motion.",
      preview: previewAuction,
      tinyPreview: tinyPreviewHotPizza,
      img: imgAuction,
      linkFrontendGitHub: "https://github.com/dag0S/auction-for-streamers",
      linkDemo: "https://auction-for-streamers.netlify.app",
      stack: [
        listTechs.nextJs,
        listTechs.react,
        listTechs.redux,
        listTechs.typescript,
        listTechs.javascript,
        listTechs.tailwind,
      ],
    },
    {
      id: 10,
      category: 0,
      name: "Next Pizza",
      desc: "Next Pizza — это обновлённая версия старого проекта Hot Pizza, построенная на основе современного фреймворка NextJS, который предоставляет полный набор инструментов для создания веб-приложений.",
      preview: previewNextPizza,
      tinyPreview: tinyPreviewHotPizza,
      img: imgNextPizza,
      linkFrontendGitHub: "https://github.com/dag0S/next-pizza",
      linkDemo: "https://next-pizza-six-sepia.vercel.app/",
      stack: [
        listTechs.nextJs,
        listTechs.react,
        listTechs.typescript,
        listTechs.javascript,
        listTechs.tailwind,
        listTechs.prisma,
      ],
    },
    {
      id: 11,
      category: 0,
      name: "Tech Wave",
      desc: "Tech Wave — это интернет-магазин электротехники, созданный на основе технологии React. Чтобы совершать покупки, нужно быть авторизованным пользователем.",
      preview: previewTechWave,
      tinyPreview: tinyPreviewHotPizza,
      img: imgTechWave,
      linkFrontendGitHub: "https://github.com/dag0S/tech_wave_frontend",
      linkBackendGitHub: "https://github.com/dag0S/tech_wave_backend",
      linkDemo: "https://tech-wave-gosudarev.netlify.app/",
      stack: [
        listTechs.react,
        listTechs.redux,
        listTechs.typescript,
        listTechs.javascript,
        listTechs.expressJs,
        listTechs.prisma,
      ],
    },
    {
      id: 12,
      category: 0,
      name: "Gosudarev Danila",
      desc: "Gosudarev Danila – это мой сайт-портфолио, который вы сейчас видите. Я создал его с нуля, начиная с дизайна и заканчивая настройкой и развертыванием.",
      preview: previewGosudarevDanila,
      tinyPreview: tinyPreviewGosudarevDanila,
      img: imgGosudarevDanila,
      linkFrontendGitHub: "https://github.com/dag0S/Gosudarev-Danila-Portfolio",
      linkDemo: "https://gosudarev-danila.netlify.app/",
      stack: [
        listTechs.react,
        listTechs.redux,
        listTechs.typescript,
        listTechs.javascript,
        listTechs.vite,
        listTechs.sass,
      ],
    },
    {
      id: 13,
      category: 0,
      name: "Hot Pizza",
      desc: "HotPizza – это проект, на котором я имел возможность усовершенствовать свои навыки работы с react и redux toolkit. Он представляет собой онлайн-магазин пиццы.",
      preview: previewHotPizza,
      tinyPreview: tinyPreviewHotPizza,
      img: imgHotPizza,
      linkFrontendGitHub: "https://github.com/dag0S/hot-pizza-spa-app",
      linkDemo: "https://pizza-hot-spa.netlify.app/",
      stack: [
        listTechs.react,
        listTechs.redux,
        listTechs.typescript,
        listTechs.javascript,
        listTechs.vite,
        listTechs.sass,
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
    text: "Смотреть демо",
    icon: btnDemo,
  },
  btnFrontendGitHub: {
    text: "Frontend код",
    icon: btnGitHub,
  },
  btnBackendGitHub: {
    text: "Backend код",
    icon: btnGitHub,
  },
  sybTitle: "Инструменты",
};

export const contactsPageData = {
  title: "<Контакты />",
  email: "danilagosudarev2004@yandex.ru",
  tel1: {
    tel: "+7 (916) 681-98-17",
    forLink: "+79166819817",
  },
  tel2: {
    tel: "+7 (993) 362-01-05",
    forLink: "+79933620105",
  },
  img: {
    src: contactsImg,
    tiny: tinyContactsImg,
    alt: "Контакты",
  },
};

export const aboutMePageData = {
  aboutMe: {
    title: "<Обо мне />",
    text: "Привет, меня зовут Данила, я Frontend разработчик. В разработке 2.5 года. Я верстаю сайты по макету Figma и создаю web-приложения с помощью React. Мне 20 лет, живу в Котельника, учусь в Москве.",
    img: {
      path: heroAboutMe,
      alt: "Госудаерв Данила",
      tiny: tinyHeroAboutMe,
    },
  },
  studies: {
    text: 'Я студент 3 курса РосНОУ (Российский Новый Университет). Учусь на направлении 09.03.01 Информатика и вычислительная техника, по специальности Безопасность информационных систем и вычислительной техники. Защитил курсовой проект на тему "Игра Arkanoid на C++".',
    img: {
      path: rosnou,
      alt: "РосНОУ",
      tiny: tinyRosnou,
    },
  },
  frontend: {
    text: 'В начале первого курса в 2022 году начал изучать верстку (HTML, CSS, SCSS) по видео с YouTube, в ноябре того же года поступил на курс WEB-разработчик онлайн школы 1T Sprint, в которой получил диплом о профессиональной переподготовке, защитив командный проект "ВяЖу". После верстки нескольких лендингов, прошел курс по JavaScript, сделав несколько проектов на чистом JS. В сентябре 2023 начал изучать React и его библиотеки по курсам. Изучив основы React, приступил к изучению TypeScript и основам ExpresJS. В настоящий момент изучаю NextJS',
    img: {
      path: frontend,
      alt: "frontend",
      tiny: tinyFrontend,
    },
  },
};

export const NotFoundData = {
  title: "Такой страницы не существует",
  text: "Одно из двух: или кто-то ее удалил, или в ссылке опичатка",
  btn: {
    text: "на главную",
    path: "/",
  },
};
