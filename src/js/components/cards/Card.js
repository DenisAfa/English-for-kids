import create from '../../utils/create';

export default class Card {
  constructor(word, image) {
    this.word = word;
    this.url = image;
    this.content = document.querySelector('.content');
  }

  create() {
    const container = create('div', 'content__card card card__main', '', this.content);
    const img = create('img', 'card__image', '', container, ['src', this.url], ['alt', 'image']);
    create('p', 'card__info', this.word, container);
    img.onload = () => this.content;
  }
}
