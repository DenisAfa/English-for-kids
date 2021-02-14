import sortData from '../../utils/sort'
export default class Table {
  sort() {
    const category = document.querySelector('.statistics__category');
    const words = document.querySelector('.statistics__word');
    const translation = document.querySelector('.statistics__translation');
    const trainStat = document.querySelector('.statistics__train');
    const gameStat = document.querySelector('.statistics__game');
    const errorStat = document.querySelector('.statistics__error');
    const percentStat = document.querySelector('.statistics__percent');

    category.addEventListener('click', this.sortCategory);
    words.addEventListener('click', this.sortName);

    translation.addEventListener('click', this.sortTranslation);
    trainStat.addEventListener('click', this.sortTrainStatistics);
    gameStat.addEventListener('click', this.sortGameStatistics);
    errorStat.addEventListener('click', this.sortErrorStatistics);
    percentStat.addEventListener('click', this.sortPercentStatistics);
  }

  sortCategory() {
    this.isDirectOrderCategory = !this.isDirectOrderCategory;
    const table = document.querySelector('table');
    const columnCategory = 0;
    const sortedRows = sortData(columnCategory, false, !this.isDirectOrderCategory);
    table.append(...sortedRows);
  }

  sortName() {
    this.isDirectOrderName = !this.isDirectOrderName;
    const table = document.querySelector('table');
    const columnName = 1;
    const sortedRows = sortData(columnName, false, this.isDirectOrderName);
    table.append(...sortedRows);
  }

  sortTranslation() {
    this.isDirectOrderTranslation = !this.isDirectOrderTranslation;
    const table = document.querySelector('table');
    const columnTranslation = 2;
    const sortedRows = sortData(columnTranslation, false, this.isDirectOrderTranslation);
    table.append(...sortedRows);
  }

  sortTrainStatistics() {
    this.isDirectOrderTrain = !this.isDirectOrderTrain;
    const table = document.querySelector('table');
    const columnTrain = 3;
    const sortedRows = sortData(columnTrain, true, this.isDirectOrderTrain);
    table.append(...sortedRows);
  }

  sortGameStatistics() {
    this.isDirectOrderGame = !this.isDirectOrderGame;
    const table = document.querySelector('table');
    const columnGame = 4;
    const sortedRows = sortData(columnGame, true, this.isDirectOrderGame);
    table.append(...sortedRows);
  }

  sortErrorStatistics() {
    this.isDirectOrderError = !this.isDirectOrderError;
    const table = document.querySelector('table');
    const columnError = 5;
    const sortedRows = sortData(columnError, true, this.isDirectOrderError);
    table.append(...sortedRows);
  }

  sortPercentStatistics() {
    this.isDirectOrderPercent = !this.isDirectOrderPercent;
    const table = document.querySelector('table');
    const columnPercent = 6;
    const sortedRows = sortData(columnPercent, true, this.isDirectOrderPercent);
    table.append(...sortedRows);
  }
}
