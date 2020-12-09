import { startGame } from './startGame';
import {
  playGame, isPlay, modePlay, newGamePlay,
} from './playGame';

import showPages from '../app/showPages';
import create from '../../utils/create';

export default class Game {
  start() {
    const switcher = document.querySelector('.switcher__checkbox');
    switcher.addEventListener('click', startGame);
    switcher.addEventListener('click', () => {
      if (isPlay) {
        modePlay();
        newGamePlay();
        const cardsContainer = document.querySelectorAll('.container');
        cardsContainer.forEach((card) => {
          card.classList.remove('container__not-translate_choice');
        });
        showPages(event);
        const buttons = document.querySelector('.buttons');
        const repeatButton = document.querySelector('.buttons__play');
        repeatButton.remove();
        create('div', 'buttons__play', '', buttons);
      }
    });
  }

  play() {
    const startButton = document.querySelector('.buttons__start');
    startButton.addEventListener('click', playGame);
  }
}
