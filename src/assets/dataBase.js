import portfolio from '../image/portfolio/portfolio.jpg';
import buns from '../image/portfolio/buns.jpg';
import nitflix from '../image/portfolio/nitflix.jpg';
import movie from '../image/portfolio/movie.jpg';
import hellen from '../image/portfolio/hellen.jpg';
import mamba from '../image/portfolio/mamba.jpg';
import mogo from '../image/portfolio/mogo.jpg';
import contactBook from '../image/portfolio/contact.jpg';
import chess from '../image/portfolio/chess.jpg';
import stackList from './stackList';

const db = [
  {
    img: portfolio,
    name: 'work name Keyboard',
    homePage: 'https://fs-engineer.github.io/keyboard/',
    stack: [stackList.STYLED_COMPONENTS, stackList.JSX, stackList.REACT],
    date: 'february, 2023',
    gang: null,
    comment:
      "This is my new pet project. It's still in development. The idea of the project arose after my observations of Ukrainian developers. Many of them do not use the weak dialing method. Although it significantly reduces development time. I decided to make an accessible, intelligent and not boring application for training this ability.",
  },
  {
    img: portfolio,
    name: 'Portfolio',
    homePage: 'https://gb-portfolio.netlify.app/',
    stack: [
      stackList.JSX,
      stackList.REACT,
      stackList.REACT_LAZY,
      stackList.CSS_MODULE,
      stackList.REACT_HOOKS,
      stackList.RESPONSIVE,
      stackList.REACT_ROUTER,
    ],
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
    stack: [
      stackList.JSX,
      stackList.REACT,
      stackList.AXIOS,
      stackList.CSS_MODULE,
      stackList.REACT_HOOKS,
      stackList.FIRE_DATABASE,
      stackList.FIRE_HOSTING,
      stackList.FIRE_FUNCTIONS,
      stackList.FIRE_AUTH,
    ],
    gang: null,
    comment:
      "It is a small online burger-shop project. With the possibility of online ordering, registration, its own online base and notification to the customer's mail",
  },
  {
    img: chess,
    name: 'Chess',
    homePage: 'https://fs-engineer.github.io/chess/',
    date: 'february, 2023',
    stack: [stackList.REACT, stackList.TYPE_SCRIPT],
    gang: null,
    comment: "It's a pet project, for TypeScript training",
  },
  {
    img: movie,
    name: 'MovieFinder',
    homePage: 'https://gb-movies-finder.netlify.app/',
    date: 'january, 2021',
    stack: [
      stackList.JSX,
      stackList.REACT,
      stackList.AXIOS,
      stackList.REACT_LAZY,
      stackList.CSS_MODULE,
      stackList.REACT_HOOKS,
      stackList.RESPONSIVE,
      stackList.REACT_ROUTER,
    ],
    gang: null,
    comment:
      'In this little movie search application, I learned the beauty of hooks =) I also played around with the @ material-ui connection',
  },
  {
    img: nitflix,
    name: 'Nitflix',
    homePage: 'https://github.com/fs-engineer/NITFLIX',
    date: 'november, 2020',
    stack: [
      stackList.JS,
      stackList.SCSS,
      stackList.HTML5,
      stackList.RESPONSIVE,
      stackList.FIRE_DATABASE,
      stackList.FIRE_AUTH,
    ],
    comment: `Thanks to the FSDev team for the cool and fruitful work. It's always a pleasure to work with you. [This app was on free hosting]`,
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
    img: hellen,
    name: 'HellEn',
    homePage: 'https://github.com/fs-engineer/HellEN',
    date: 'july, 2020',
    stack: [
      stackList.JS,
      stackList.SCSS,
      stackList.AJAX,
      stackList.HTML5,
      stackList.JQUERY,
    ],
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
    homePage: 'https://github.com/fs-engineer/Mamba',
    date: 'october, 2020',
    stack: [
      stackList.JS,
      stackList.SCSS,
      stackList.HTML5,
      stackList.CANVAS,
      stackList.RESPONSIVE,
      stackList.FIRE_DATABASE,
      stackList.FIRE_AUTH,
    ],
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
    homePage: 'https://github.com/fs-engineer/mogo',
    date: 'july, 2020',
    stack: [stackList.HTML5, stackList.SCSS],
    gang: null,
    comment:
      'This is my first big landing page. Unfortunately, I was too lazy to make it responsive. Since I was in a hurry to start learning JS.',
  },
  {
    img: contactBook,
    name: 'ContactBook',
    homePage: 'https://gb-contacts-book.netlify.app/',
    date: 'december, 2020',
    stack: [
      stackList.REACT,
      stackList.AXIOS,
      stackList.CSS_MODULE,
      stackList.REACT_LAZY,
      stackList.REACT_HOOKS,
      stackList.REACT_ROUTER,
      stackList.FIRE_DATABASE,
      stackList.FIRE_AUTH,
    ],
    gang: null,
    comment:
      'I understand that for such an application Redux is not needed, but using his example it was very easy to understand how it works',
  },
];

export default db;
