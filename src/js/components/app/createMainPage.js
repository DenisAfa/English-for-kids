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

export default function createMainPage(categories) {
  let image;
  let newCard;
  switch (categories) {
    case ACTION_SET_A:
      image = cardsSetA[0].image;
      newCard = new Card(ACTION_SET_A, image);
      newCard.create();
      break;
    case ACTION_SET_B:
      image = cardsSetB[0].image;
      newCard = new Card(ACTION_SET_B, image);
      newCard.create();
      break;
    case ANIMAL_SET_A:
      image = cardsAnimalA[0].image;
      newCard = new Card(ANIMAL_SET_A, image);
      newCard.create();
      break;
    case ANIMAL_SET_B:
      image = cardsAnimalB[0].image;
      newCard = new Card(ANIMAL_SET_B, image);
      newCard.create();
      break;
    case CLOTHES:
      image = cardsClothes[0].image;
      newCard = new Card(CLOTHES, image);
      newCard.create();
      break;
    case EMOTION:
      image = cardsEmotions[0].image;
      newCard = new Card(EMOTION, image);
      newCard.create();
      break;
    case FAMILY:
      image = cardsFamily[0].image;
      newCard = new Card(FAMILY, image);
      newCard.create();
      break;
    case FOOD:
      image = cardsFood[0].image;
      newCard = new Card(FOOD, image);
      newCard.create();
      break;
    default:
  }
}
