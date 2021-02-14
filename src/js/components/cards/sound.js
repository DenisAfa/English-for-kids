import cardsSetA from '../../constants/cardsSetA';
import cardsSetB from '../../constants/cardsSetB';
import cardsAnimalA from '../../constants/cardsAnimalA';
import cardsAnimalB from '../../constants/cardsAnimalB';
import cardsClothes from '../../constants/cardsClothes';
import cardsEmotions from '../../constants/cardsEmotions';
import cardsFamily from '../../constants/cardsFamily';
import cardsFood from '../../constants/cardsFood';
import { isGame } from '../game/startGame';
import { isPlay } from '../game/playGame';
import { categoriesCards } from '../../constants/constants'

function createNewSound(card) {
  if (!isGame) {
    const cardAudio = card.audioSrc;
    const audio = new Audio(cardAudio);
    audio.play();
  } else if (isPlay) {
    const cardAudio = card.audioSrc;
    const audio = new Audio(cardAudio);
    audio.play();
  }
}

export default function playSound(event) {
  let targetCardId;
  if (typeof (event) === 'number') {
    targetCardId = event;
  } else if (!isPlay) {
    targetCardId = Number(event.target.closest('div').dataset.cardId);
  }
  
  categoriesCards.forEach((category) => {
    category.forEach((card) => {
      const cardId = card.id;
      if (cardId === targetCardId) {
        createNewSound(card);
        if (!isGame) {
          card.train += 1;
        }
      }
    });
  });
}
