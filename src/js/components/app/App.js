import {
  openCloseMenu,
  closeMenu,
} from '../../utils/dom-function';
import { categories } from '../../constants/constants';
import showPages from './showPages';
import Game from '../game/Game';
import { checkMode } from '../game/startGame';
import { changeModePlayForMenu } from '../game/playGame';
import createMainPage from './createMainPage';

export default class App {
  initApp() {
    this.initMainPage();
    this.mainMenu();
    this.initWordsPage();
    this.playGame();
  }

  initMainPage() {
    categories.forEach((category) => {
      createMainPage(category);
    });
  }

  initWordsPage() {
    const categoriesMenu = document.querySelector('.content');
    const menu = document.querySelector('.menu__list');
    categoriesMenu.addEventListener('click', showPages);
    menu.addEventListener('click', showPages);
    categoriesMenu.addEventListener('click', checkMode);
    menu.addEventListener('click', checkMode);
    menu.addEventListener('click', changeModePlayForMenu);
  }

  mainMenu() {
    const burgerMenu = document.querySelector('.menu__burger');
    const substrate = document.querySelector('.substrate');
    burgerMenu.addEventListener('click', openCloseMenu);
    substrate.addEventListener('click', closeMenu);
  }

  playGame() {
    const game = new Game();
    game.start();
    game.play();
  }
}
