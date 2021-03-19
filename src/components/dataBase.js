import portfolio from '../image/portfolio/portfolio.jpg';
import buns from '../image/portfolio/buns.jpg';
import nitflix from '../image/portfolio/nitflix.jpg';
import movie from '../image/portfolio/movie.jpg';
import hellen from '../image/portfolio/hellen.jpg';
import mamba from '../image/portfolio/mamba.jpg';
import mogo from '../image/portfolio/mogo.jpg';

const db = [
  {
    img: portfolio,
    name: 'Portfolio',
    homePage: 'https://gb-portfolio.netlify.app/',
    stack: {
      jsx: 'JSX',
      react: 'React',
      reactLazy: 'React-Lazy',
      cssModule: 'CSS3-module',
      reactHooks: 'React-Hooks',
      responsive: 'Responsive Design',
      reactRouter: 'React-Router',
    },
    date: 'january, 2021',
    gang: null,
    comment:
      "It's time for me to make my portfolio too. It's not finished yet. I will introduce new features as I study.",
  },
  {
    img: buns,
    name: 'Between The Buns',
    homePage: 'https://betweenthebuns-666fd.web.app/',
    date: 'december, 2021',
    stack: {
      jsx: 'JSX',
      react: 'React',
      axios: 'Axios',
      cssModule: 'CSS3-module',
      reactHooks: 'React-Hooks',
      firebaseDatabase: 'Firebase-Database',
      firebaseHousting: 'Firebase-Housting',
      firebaseFuncions: 'Firebase-Funcions',
      firebaseAuthantication: 'Firebase-Authantication',
    },
    gang: null,
    comment:
      "It is a small online burger-shop project. With the possibility of online ordering, registration, its own online base and notification to the customer's mail",
  },
  {
    img: nitflix,
    name: 'Nitflix',
    homePage: 'https://nitflix.fun/',
    date: 'november, 2020',
    stack: {
      js: 'JS',
      scss: 'SCSS',
      html5: 'HTML5',
      responsive: 'Responsive Design',
      firebaseDatabase: 'Firebase-Database',
      firebaseAuthantication: 'Firebase-Authantication',
    },
    comment: `Thanks to the FSDev team for the cool and fruitful work. It's always a pleasure to work with you.`,
    gang: [
      {
        url: 'https://github.com/IvanFesenko',
        name: 'Ivan Fesenko',
      },
      {
        url: 'https://github.com/Bignichok',
        name: 'Nikita Samoilenko',
      },
      {
        url: 'https://github.com/Maximusvin',
        name: 'Maxim Kozlov',
      },
    ],
  },
  {
    img: movie,
    name: 'MovieFinder',
    homePage: 'https://gb-movies-finder.netlify.app/',
    date: 'january, 2021',
    stack: {
      jsx: 'JSX',
      react: 'React',
      axios: 'Axios',
      reactLazy: 'React-Lazy',
      cssModule: 'CSS3-module',
      reactHooks: 'React-Hooks',
      responsive: 'Responsive Design',
      reactRouter: 'React-Router',
    },
    gang: null,
    comment:
      'In this little movie search application, I learned the beauty of hooks =) I also played around with the @ material-ui connection',
  },
  {
    img: hellen,
    name: 'HellEn',
    homePage: 'https://hellen.fun/',
    date: 'july, 2020',
    stack: {
      js: 'JS',
      scss: 'SCSS',
      ajax: 'AJAX',
      html5: 'HTML5',
      jquery: 'JQuery',
      responsive: 'Responsive Design',
    },
    comment:
      'This is my first team project with FSDev. Responsive design was used. High pixel density screens are supported. A telegram bot is connected for feedback.',
    gang: [
      {
        url: 'https://github.com/IvanFesenko',
        name: 'Ivan Fesenko',
      },
      {
        url: 'https://github.com/Bignichok',
        name: 'Nikita Samoilenko',
      },
      {
        url: 'https://github.com/Maximusvin',
        name: 'Maxim Kozlov',
      },
    ],
  },
  {
    img: mamba,
    name: 'Mamba',
    homePage: 'https://google-barma.github.io/Mamba/',
    date: 'october, 2020',
    stack: {
      js: 'JS',
      scss: 'SCSS',
      html5: 'HTML5',
      canvas: 'Canvas',
      responsive: 'Responsive Design',
      firebaseDatabase: 'Firebase-Database',
      firebaseAuthantication: 'Firebase-Authantication',
    },
    comment:
      'This is the good old Snake game. With registration and keeping personal statistics',
    gang: [
      {
        url: 'https://github.com/IvanFesenko',
        name: 'Ivan Fesenko',
      },
      {
        url: 'https://github.com/Bignichok',
        name: 'Nikita Samoilenko',
      },
      {
        url: 'https://github.com/Maximusvin',
        name: 'Maxim Kozlov',
      },
    ],
  },
  {
    img: mogo,
    name: 'MoGo',
    homePage: 'https://google-barma.github.io/mogo/build/',
    date: 'july, 2020',
    stack: { html5: 'HTML5', scss: 'SCSS' },
    gang: null,
    comment:
      'This is my first big landing page. Unfortunately, I was too lazy to make it responsive. Since I was in a hurry to start learning JS.',
  },
  {
    img: '/portfolio/contact.jpg',
    name: 'ContactBook',
    homePage: 'https://gb-contacts-book.netlify.app/',
    date: 'december, 2020',
    stack: {
      react: 'React',
      redux: 'Redux',
      cssModule: 'CSS3-module',
      reactLazy: 'React-Lazy',
      reactHooks: 'React-Hooks',
      reactRouter: 'React-Router',
      firebaseDatabase: 'Firebase-Database',
      firebaseAuthantication: 'Firebase-Authantication',
    },
    gang: null,
    comment:
      'I understand that for such an application Redux is not needed, but using his example it was very easy to understand how it works',
  },
];

export default db;
