import create from '../../utils/create';
import cardsSetA from '../../constants/cardsSetA';
import cardsSetB from '../../constants/cardsSetB';
import cardsAnimalA from '../../constants/cardsAnimalA';
import cardsAnimalB from '../../constants/cardsAnimalB';
import cardsClothes from '../../constants/cardsClothes';
import cardsEmotions from '../../constants/cardsEmotions';
import cardsFamily from '../../constants/cardsFamily';
import cardsFood from '../../constants/cardsFood';
import {
  ACTION_SET_A,
  ACTION_SET_B,
  ANIMAL_SET_A,
  ANIMAL_SET_B,
  CLOTHES,
  EMOTION,
  FAMILY,
  FOOD,
} from '../../constants/constants';
import WordCard from '../cards/WordCard';

export default class Statistics {
  constructor() {
    this.container = document.querySelector('.content');
    this.categories = [cardsSetA, cardsSetB, cardsAnimalA, cardsAnimalB,
      cardsClothes, cardsEmotions, cardsFamily, cardsFood];
  }

  create() {
    this.container.innerHTML = '';
    const lineButtons = create('div', 'statistics__buttons', '', this.container);
    create('div', 'statistics__train-words', 'Repeat difficult words', lineButtons);
    create('div', 'statistics__reset', 'Reset', lineButtons);
    const table = create('table', 'statistics', '', this.container);
    const line = create('tr', 'statistics__main-line', '', table);
    create('td', 'statistics__category', 'Category', line);
    create('td', 'statistics__word', 'Word', line);
    create('td', 'statistics__translation', 'Translation', line);
    create('td', 'statistics__train', 'Train', line);
    create('td', 'statistics__game', 'Game', line);
    create('td', 'statistics__error', 'Error', line);
    create('td', 'statistics__percent', 'Percent, %', line);

    this.categories.forEach((category) => {
      category.forEach((card) => {
        this.createCategoryStatistics(category, card, table);
      });
    });
  }

  reset() {
    const resetButton = document.querySelector('.statistics__reset');
    resetButton.addEventListener('click', () => {
      const trainingCells = document.querySelectorAll('.train');
      const gameCells = document.querySelectorAll('.game');
      const errorCells = document.querySelectorAll('.error');
      const percentCells = document.querySelectorAll('.percent');
      const columns = [trainingCells, gameCells, errorCells, percentCells];
      columns.forEach((column) => {
        column.forEach((cell) => {
          cell.textContent = '0';
        });
      });
    });
  }

  createTrainingCards() {
    const repeatWordsButton = document.querySelector('.statistics__train-words');
    repeatWordsButton.addEventListener('click', () => {
      const lines = document.querySelectorAll('tr');

      const sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => Number(rowA.cells[6].innerHTML) - Number(rowB.cells[6].innerHTML));
      const trainingWordsArr = [];
      sortedRows.forEach((sortedRow) => {
        const percentValue = Number(sortedRow.lastChild.textContent);
        const word = sortedRow.children[1].textContent;
        const category = sortedRow.children[0].textContent;
        if (percentValue !== 0 && percentValue !== 100) {
          trainingWordsArr.push(word);
        }
      });

      let maxTrainingCards;
      if (trainingWordsArr.length <= 8) {
        maxTrainingCards = trainingWordsArr.length;
      } else {
        maxTrainingCards = 8;
      }
      this.container.innerHTML = '';
      for (let i = 0; i < maxTrainingCards; i += 1) {
        const trainingWord = trainingWordsArr[i];

        this.categories.forEach((category) => {
          category.forEach((card) => {
            if (card.word === trainingWord) {
              this.createCard(card);
            }
          });
        });
      }
    });
  }

  createCategoryStatistics(category, card, table) {
    const percentWordRight = Number.isNaN((card.game / (card.error + card.game)))
      ? 0
      : (card.game / ((card.error + card.game)) * 100).toFixed(1);
    let categoryName;
    switch (category) {
      case cardsSetA:
        categoryName = ACTION_SET_A;
        break;
      case cardsSetB:
        categoryName = ACTION_SET_B;
        break;
      case cardsAnimalA:
        categoryName = ANIMAL_SET_A;
        break;
      case cardsAnimalB:
        categoryName = ANIMAL_SET_B;
        break;
      case cardsClothes:
        categoryName = CLOTHES;
        break;
      case cardsEmotions:
        categoryName = EMOTION;
        break;
      case cardsFamily:
        categoryName = FAMILY;
        break;
      case cardsFood:
        categoryName = FOOD;
        break;
      default:
    }
    const line = create('tr', '', '', table);
    create('td', '', categoryName, line);
    create('td', '', card.word, line);
    create('td', '', card.translation, line);
    create('td', 'train', String(card.train), line);
    create('td', 'game', String(card.game), line);
    create('td', 'error', String(card.error), line);
    create('td', 'percent', String(percentWordRight), line);
  }

  createCard(card) {
    const name = String(card.word);
    const id = Number(card.id);
    const translate = String(card.translation);
    const image = String(card.image);
    const audio = String(card.audioSrc);
    const cardTraining = new WordCard(name, id, translate, image, audio);
    cardTraining.create();
    cardTraining.translate();
    cardTraining.sound();
  }
}
