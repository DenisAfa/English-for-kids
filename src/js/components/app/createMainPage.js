import cardsSetA from '../../constants/cardsSetA';
import cardsSetB from '../../constants/cardsSetB';
import cardsAnimalA from '../../constants/cardsAnimalA';
import cardsAnimalB from '../../constants/cardsAnimalB';
import cardsClothes from '../../constants/cardsClothes';
import cardsEmotions from '../../constants/cardsEmotions';
import cardsFamily from '../../constants/cardsFamily';
import cardsFood from '../../constants/cardsFood';
import Card from '../cards/Card';

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

function createMainCard(category, categoryCard) {
    let image = categoryCard[0].image;
    let newCard = new Card(category, image);
    newCard.create();
}

export default function createMainPage(category) {
  switch (category) {
    case ACTION_SET_A:
        createMainCard(ACTION_SET_A, cardsSetA);
      break;
    case ACTION_SET_B:
        createMainCard(ACTION_SET_B, cardsSetB);
      break;
    case ANIMAL_SET_A:
        createMainCard(ANIMAL_SET_A, cardsAnimalA);
      break;
    case ANIMAL_SET_B:
        createMainCard(ANIMAL_SET_B, cardsAnimalB);
      break;
    case CLOTHES:
        createMainCard(CLOTHES, cardsClothes);
      break;
    case EMOTION:
        createMainCard(EMOTION, cardsEmotions);
      break;
    case FAMILY:
        createMainCard(FAMILY, cardsFamily);
      break;
    case FOOD:
        createMainCard(FOOD, cardsFood);
      break;
    default:
  }
}

