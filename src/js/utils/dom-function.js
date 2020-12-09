import {
  MAIN_PAGE,
  START_GAME,
  STATISTICS,
} from '../constants/constants';
import { isPlay } from '../components/game/playGame';

const openCloseMenu = () => {
  const menu = document.querySelector('.menu__list');
  const burger = document.querySelector('.burger');
  const substrate = document.querySelector('.substrate');
  const body = document.querySelector('body');
  burger.classList.toggle('burger__active');
  menu.classList.toggle('menu__list_active');
  substrate.classList.toggle('substrate_active');
  body.classList.toggle('body__modal_active');
};

const closeMenu = () => {
  const menu = document.querySelector('.menu__list');
  const burger = document.querySelector('.burger');
  const substrate = document.querySelector('.substrate');
  const body = document.querySelector('body');
  if (substrate.classList.contains('substrate_active')) {
    burger.classList.remove('burger__active');
    menu.classList.remove('menu__list_active');
    substrate.classList.remove('substrate_active');
    body.classList.remove('body__modal_active');
  }
};

const addTranslateCard = (event) => {
  const targetTranslate = event.target.parentNode.parentNode.lastChild.textContent;
  const cards = document.querySelectorAll('.card__info');

  cards.forEach((card) => {
    const cardName = card.textContent;
    if (cardName === targetTranslate) {
      const cardContainer = event.target.closest('.container__not-translate');
      const frontCard = event.target.closest('.card__front');
      const backCard = event.target.closest('.card__front').nextSibling;
      frontCard.classList.add('card__front_active');
      backCard.classList.add('card__back_active');
      cardContainer.classList.remove('container__not-translate');
      cardContainer.classList.add('container__translate');
    }
  });
};

const removeTranslateCard = () => {
  const frontCard = document.querySelector('.card__front_active');
  const backCard = document.querySelector('.card__back_active');
  const cardContainer = document.querySelector('.container__translate');
  frontCard.classList.remove('card__front_active');
  backCard.classList.remove('card__back_active');
  cardContainer.classList.add('container__not-translate');
  cardContainer.classList.remove('container__translate');
};

const startGameStyle = () => {
  const switcher = document.querySelector('.switcher__checkbox');
  const body = document.querySelector('body');
  const translateButtons = document.querySelectorAll('.card__button');
  const nameCards = document.querySelectorAll('.card__info-word');
  const cards = document.querySelectorAll('.container');
  cards.forEach((card) => {
    card.classList.add('container__not-translate_active');
  });
  translateButtons.forEach((translateButton) => {
    translateButton.classList.add('card__button_game');
  });
  nameCards.forEach((nameCard) => {
    nameCard.classList.add('card__info_active');
  });
  body.classList.add('body_active');
  switcher.classList.add('switcher__checkbox_active');
  const activeCategory = document.querySelector('.menu__item_active').textContent;
  const answerField = document.querySelector('.answer');
  answerField.classList.add('answer_active');

  const startGame = document.querySelector('.buttons__start');
  const startGameText = startGame.textContent;
  if (activeCategory !== MAIN_PAGE && activeCategory !== STATISTICS) {
    if (startGameText === '' && !isPlay) {
      startGame.classList.add('buttons__start_active');
      startGame.textContent = START_GAME;
    }
  } else {
    startGame.classList.remove('buttons__start_active');
    startGame.innerHTML = '';
  }
};

const endGameStyle = () => {
  const switcher = document.querySelector('.switcher__checkbox');
  const body = document.querySelector('body');
  const translateButtons = document.querySelectorAll('.card__button');
  const nameCards = document.querySelectorAll('.card__info-word');
  translateButtons.forEach((translateButton) => {
    translateButton.classList.remove('card__button_game');
  });
  nameCards.forEach((nameCard) => {
    nameCard.classList.remove('card__info_active');
  });
  const cards = document.querySelectorAll('.container');
  cards.forEach((card) => {
    card.classList.remove('container__not-translate_active');
  });
  body.classList.remove('body_active');
  switcher.classList.remove('switcher__checkbox_active');
  const startGame = document.querySelector('.buttons__start');
  startGame.innerHTML = '';
  startGame.classList.remove('buttons__start_active');
  const answerField = document.querySelector('.answer');
  answerField.classList.remove('answer_active');
};

const changeGameButtonPlay = () => {
  const startGame = document.querySelector('.buttons__start');
  startGame.innerHTML = '';
  startGame.classList.remove('buttons__start_active');
  const playButton = document.querySelector('.buttons__play');
  playButton.style.backgroundImage = "url('./assets/icons/replay-black-18dp.svg')";
  playButton.classList.add('buttons__play_active');
};

const changeGameButtonStart = () => {
  const playButton = document.querySelector('.buttons__play');
  playButton.style.backgroundImage = 'none';
  playButton.classList.remove('buttons__play_active');
  const startGame = document.querySelector('.buttons__start');
  const startGameText = startGame.textContent;
  const activeCategory = document.querySelector('.menu__item_active').textContent;
  if (activeCategory !== MAIN_PAGE && activeCategory !== STATISTICS) {
    if (startGameText === '' && !isPlay) {
      startGame.classList.add('buttons__start_active');
      startGame.textContent = START_GAME;
    }
  }
  const answerRight = document.querySelector('.answer__right');
  const answerFail = document.querySelector('.answer__fail');
  answerFail.innerHTML = '';
  answerRight.innerHTML = '';
};

export {
  openCloseMenu,
  closeMenu,
  addTranslateCard,
  removeTranslateCard,
  startGameStyle,
  endGameStyle,
  changeGameButtonPlay,
  changeGameButtonStart,
};
