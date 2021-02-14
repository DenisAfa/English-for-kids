import {
  categories,
  MAIN_PAGE,
  ACTION_SET_A,
  ACTION_SET_B,
  ANIMAL_SET_A,
  ANIMAL_SET_B,
  CLOTHES,
  EMOTION,
  FAMILY,
  FOOD,
  STATISTICS,
} from '../../constants/constants';
import WordCard from '../cards/WordCard';
import cardsSetA from '../../constants/cardsSetA';
import cardsSetB from '../../constants/cardsSetB';
import cardsAnimalA from '../../constants/cardsAnimalA';
import cardsAnimalB from '../../constants/cardsAnimalB';
import cardsClothes from '../../constants/cardsClothes';
import cardsEmotions from '../../constants/cardsEmotions';
import cardsFamily from '../../constants/cardsFamily';
import cardsFood from '../../constants/cardsFood';
import { getRandomCard } from '../../utils/getRandomCard';
import createMainPage from './createMainPage';
import Statistics from '../statistics/Statistics';
import Table from '../statistics/Table';

export function createNewWordCard(cardName) {
  const name = cardName[0];
  const id = cardName[1];
  const translate = cardName[2];
  const image = cardName[3];
  const audio = cardName[4];
  const card = new WordCard(name, id, translate, image, audio);
  card.create();
  card.translate();
  card.sound();
}

function createNewPage(cardSet) {
    let shuffleCardsName = getRandomCard(cardSet);
      shuffleCardsName.forEach((cardName) => {
        createNewWordCard(cardName);
      });
}

export default function showPages(event) {
  let categoryName;
  if (event.target.closest('div').classList.contains('switcher')) {
    categoryName = document.querySelector('.menu__item_active').textContent;
  } else {
    categoryName = event.target.parentElement.lastChild.textContent;
  }
  const categoryActive = event.target.parentElement;

  const content = document.querySelector('.content');
  const menu = document.querySelector('.menu__list');
  const categoriesMenu = document.querySelectorAll('.menu__item');
  const burger = document.querySelector('.burger');
  const categoryActiveNow = document.querySelector('.menu__item_active');
  const substrate = document.querySelector('.substrate');
  const body = document.querySelector('body');

  if (categories.includes(categoryName) || categoryName === MAIN_PAGE
                                         || categoryName === STATISTICS) {
    content.innerHTML = '';
    menu.classList.remove('menu__list_active');
    burger.classList.remove('burger__active');
    categoryActiveNow.classList.remove('menu__item_active');
    substrate.classList.remove('substrate_active');
    body.classList.remove('body__modal_active');
  }

  categoriesMenu.forEach((categoryMenu) => {
    if (categoryMenu.textContent === categoryName) {
      categoryMenu.classList.add('menu__item_active');
    }
  });

  switch (categoryName) {
    case ACTION_SET_A: {
        createNewPage(cardsSetA);
      break;
    }

    case ACTION_SET_B: {
        createNewPage(cardsSetB);
      break;
    }

    case ANIMAL_SET_A: {
      createNewPage(cardsAnimalA);
      break;
    }

    case ANIMAL_SET_B: {
      createNewPage(cardsAnimalB);
      break;
    }

    case CLOTHES: {
      createNewPage(cardsClothes);
      break;
    }

    case EMOTION: {
      createNewPage(cardsEmotions);
      break;
    }

    case FAMILY: {
      createNewPage(cardsFamily);
      break;
    }

    case FOOD: {
      createNewPage(cardsFood);
      break;
    }

    case MAIN_PAGE: {
      categories.forEach((category) => {
        createMainPage(category);
      });
      categoryActive.classList.add('menu__item_active');
      break;
    }

    case STATISTICS: {
      const stat = new Statistics();
      stat.create();
      stat.reset();
      stat.createTrainingCards();
      const tableStat = new Table();
      tableStat.sort();
      break;
    }

    default:
  }
}
