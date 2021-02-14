import {
  changeGameButtonPlay,
  changeGameButtonStart,
} from '../../utils/dom-function';
import { shuffle } from '../../utils/getRandomCard';
import {
  ACTION_SET_A,
  ACTION_SET_B,
  ANIMAL_SET_A,
  ANIMAL_SET_B,
  CLOTHES,
  EMOTION,
  FAMILY,
  FOOD,
  RIGHT_CARD_SOUND,
  WRONG_CARD_SOUND,
  WIN_GAME_SOUND,
  LOSE_GAME_SOUND,
  categories,
  categoriesCards
} from '../../constants/constants';
import playSound from '../cards/sound';
import createMainPage from '../app/createMainPage';
import create from '../../utils/create';
import cardsSetA from '../../constants/cardsSetA';
import cardsSetB from '../../constants/cardsSetB';
import cardsAnimalA from '../../constants/cardsAnimalA';
import cardsAnimalB from '../../constants/cardsAnimalB';
import cardsClothes from '../../constants/cardsClothes';
import cardsEmotions from '../../constants/cardsEmotions';
import cardsFamily from '../../constants/cardsFamily';
import cardsFood from '../../constants/cardsFood';

export let isPlay = false;
let isGameWin = true;
let cardSound;
let answerId = [];

export function newGamePlay() {
  isPlay = false;
  answerId = [];
  isGameWin = true;
}

export function modePlay() {
  isPlay = !isPlay;
}

export function checkModePlay() {
  if (isPlay) {
    changeGameButtonPlay();
  } else {
    changeGameButtonStart();
  }
}

export function getRandomArrId() {
  const cards = document.querySelectorAll('.card__front');
  const cardsIdArr = [];
  cards.forEach((card) => {
    cardsIdArr.push(card.dataset.cardId);
  });
  shuffle(cardsIdArr);
  return cardsIdArr;
}

function addPlayGameStat(cardId) {
  categoriesCards.forEach((categoryCard) => {
      categoryCard.forEach((card) => {
        let targetCardId = card.id;
        if (targetCardId === cardId) {
            card.game += 1;
          }
      })
  })
}

function addPlayErrorStat(cardSound) {
  const categoryName = document.querySelector('.menu__item_active').textContent;
  categoriesCards.forEach((categoryCard) => {
    categoryCard.forEach((card) => {
        let targetCardId = card.id;
        if (targetCardId === cardSound) {
          card.error += 1;
        }
    })
  })
}

function incorrectAnswer(answerId, cardId, cardSound) {
  if (answerId.length === 0) {
    const audioFail = new Audio(WRONG_CARD_SOUND);
    audioFail.play();
    const answerField = document.querySelector('.answer__fail');
    create('img', 'fail_logo', '', answerField, ['src', './assets/icons/fail.svg'], ['alt', 'fail_logo']);
    addPlayErrorStat(cardSound);
  } else if (answerId.indexOf(cardId) === -1) {
    const audioFail = new Audio(WRONG_CARD_SOUND);
    audioFail.play();
    const answerField = document.querySelector('.answer__fail');
    create('img', 'fail_logo', '', answerField, ['src', './assets/icons/fail.svg'], ['alt', 'fail_logo']);
    addPlayErrorStat(cardSound);
  }
}

function gameOver() {
  const timeBeforeNewGame = 3000;
  const maxCorrectAnswer = 8;
  if (answerId.length === maxCorrectAnswer) {
    if (isGameWin) {
      const overlay = document.querySelector('.substrate');
      overlay.classList.add('substrate_active');
      create('img', 'win', '', overlay, ['src', './assets/icons/WinGame.svg'], ['alt', 'win-game']);
      const audioWinGame = new Audio(WIN_GAME_SOUND);
      audioWinGame.play();
      setTimeout(() => {
        overlay.innerHTML = '';
        overlay.classList.remove('substrate_active');
        const content = document.querySelector('.content');
        content.innerHTML = '';
        const buttons = document.querySelector('.buttons');
        const repeatButton = document.querySelector('.buttons__play');
        repeatButton.remove();
        create('div', 'buttons__play', '', buttons);
        categories.forEach((categories) => {
          createMainPage(categories);
        });
        changeGameButtonStart();
        newGamePlay();
      }, timeBeforeNewGame);
    } else {
      const countFail = document.querySelector('.answer__fail').children.length;
      const overlay = document.querySelector('.substrate');
      overlay.classList.add('substrate_active');
      overlay.textContent = `Your fail ${countFail}`;
      create('img', 'lose', '', overlay, ['src', './assets/icons/LoseGame.svg'], ['alt', 'lose-game']);
      const audioLoseGame = new Audio(LOSE_GAME_SOUND);
      audioLoseGame.play();
      setTimeout(() => {
        overlay.innerHTML = '';
        overlay.classList.remove('substrate_active');
        const content = document.querySelector('.content');
        content.innerHTML = '';
        const buttons = document.querySelector('.buttons');
        const repeatButton = document.querySelector('.buttons__play');
        repeatButton.remove();
        create('div', 'buttons__play', '', buttons);
        categories.forEach((categories) => {
          createMainPage(categories);
        });
        changeGameButtonStart();
        newGamePlay();
      }, timeBeforeNewGame);
    }
  }
}

export function guessCard(event, cardsIdArr) {
  const cardId = Number(event.target.closest('div').dataset.cardId);
  const cardContainer = event.target.closest('.container');
  const soundTimeOut = 1500;
  if (isPlay) {
    if (cardId === cardSound) {
      answerId.push(cardSound);
      cardSound = Number(cardsIdArr.pop());
      cardContainer.classList.add('container__not-translate_choice');
      const audioRight = new Audio(RIGHT_CARD_SOUND);
      audioRight.play();
      const answerField = document.querySelector('.answer__right');
      create('img', 'fail_logo', '', answerField, ['src', './assets/icons/right.svg'], ['alt', 'right_logo']);
      addPlayGameStat(cardId);
      setTimeout(() => playSound(cardSound), soundTimeOut);
      setTimeout(() => gameOver(), soundTimeOut);
    } else {
      isGameWin = false;
      incorrectAnswer(answerId, cardId, cardSound);
    }
  }
}

export function playGame() {
  modePlay();
  checkModePlay();
  const cardsIdArr = getRandomArrId();
  cardSound = Number(cardsIdArr.pop());
  playSound(cardSound);
  const repeatButton = document.querySelector('.buttons__play');
  repeatButton.addEventListener('click', () => playSound(cardSound));
  const cards = document.querySelectorAll('.card__front');
  cards.forEach((card) => {
    card.addEventListener('click', () => guessCard(event, cardsIdArr));
  });
}

export function changeModePlayForMenu() {
    if (isPlay) {
        newGamePlay();
      }
    checkModePlay();
}