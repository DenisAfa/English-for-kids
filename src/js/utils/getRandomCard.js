export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function getRandomCard(setName) {
  const arrayNames = [];
  setName.forEach((card) => {
    arrayNames.push([card.word, card.id, card.translation, card.image, card.audioSrc]);
  });
  shuffle(arrayNames);
  return arrayNames;
}
