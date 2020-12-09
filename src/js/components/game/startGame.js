import {
  startGameStyle,
  endGameStyle,
  changeGameButtonStart,
}
  from '../../utils/dom-function';

export let isGame = false;

function modeGame() {
  isGame = !isGame;
}

export function checkMode() {
  if (isGame) {
    startGameStyle();
  } else {
    endGameStyle();
    changeGameButtonStart();
  }
}

export function startGame() {
  modeGame();
  checkMode();
}
