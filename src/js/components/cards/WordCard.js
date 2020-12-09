import create from '../../utils/create';
import Card from './Card';
import {
  translate,
  reverseTranslate,
} from './translate';
import playSound from './sound';

export default class WordCard extends Card {
  constructor(word, id, translation, image, audio) {
    super(word, image);
    this.id = id;
    this.translation = translation;
    this.audio = audio;
    this.url = image;
  }

  create() {
    const mainContainerCard = create('div', 'container container__not-translate', '', this.content);
    const container = create('div', 'content__card card card__front', '', mainContainerCard, ['data-card-id', this.id]);
    const img = create('img', 'card__image card__image-word', '', container, ['src', this.url], ['alt', 'image']);
    create('div', 'card__button', '<img src="./assets/icons/cached-24px.svg" alt="button">', container);
    create('p', 'card__info card__info-word', this.word, container);
    const containerTranslate = create('div', 'content__card card card__back', '', mainContainerCard);
    create('img', 'card__image card__image-word', '', containerTranslate, ['src', this.url], ['alt', 'image']);
    create('p', 'card__info card__info-word', this.translation, containerTranslate);
    img.onload = () => this.content;
  }

  sound() {
    const content = document.querySelector('.content');
    content.addEventListener('click', playSound);
  }

  translate() {
    const buttons = document.querySelectorAll('.card__button');
    buttons.forEach((button) => {
      button.addEventListener('click', translate);
    });

    const cards = document.querySelectorAll('.card__back');
    cards.forEach((card) => {
      card.addEventListener('mouseleave', reverseTranslate);
    });
  }
}
