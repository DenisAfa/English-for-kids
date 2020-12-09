import {
  addTranslateCard,
  removeTranslateCard,
} from '../../utils/dom-function';

export let isTranslate = false;

export function translate(event) {
  if (!isTranslate) {
    isTranslate = true;
    addTranslateCard(event);
  }
}

export function reverseTranslate() {
  if (isTranslate) {
    isTranslate = false;
    removeTranslateCard();
  }
}
