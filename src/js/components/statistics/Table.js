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
    const lines = document.querySelectorAll('tr');
    const table = document.querySelector('table');
    let sortedRows;
    if (this.isDirectOrderCategory) {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => (rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1));
    } else {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => (rowA.cells[0].innerHTML < rowB.cells[0].innerHTML ? 1 : -1));
    }
    table.append(...sortedRows);
  }

  sortName() {
    this.isDirectOrderName = !this.isDirectOrderName;
    const lines = document.querySelectorAll('tr');
    const table = document.querySelector('table');
    let sortedRows;
    if (this.isDirectOrderName) {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => (rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1));
    } else {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => (rowA.cells[1].innerHTML < rowB.cells[1].innerHTML ? 1 : -1));
    }
    table.append(...sortedRows);
  }

  sortTranslation() {
    this.isDirectOrderTranslation = !this.isDirectOrderTranslation;
    const lines = document.querySelectorAll('tr');
    const table = document.querySelector('table');
    let sortedRows;
    if (this.isDirectOrderTranslation) {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => (rowA.cells[2].innerHTML > rowB.cells[2].innerHTML ? 1 : -1));
    } else {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => (rowA.cells[2].innerHTML < rowB.cells[2].innerHTML ? 1 : -1));
    }
    table.append(...sortedRows);
  }

  sortTrainStatistics() {
    this.isDirectOrderTrain = !this.isDirectOrderTrain;
    const lines = document.querySelectorAll('tr');
    const table = document.querySelector('table');
    let sortedRows;
    if (this.isDirectOrderTrain) {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => Number(rowB.cells[3].innerHTML) - Number(rowA.cells[3].innerHTML));
    } else {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => Number(rowA.cells[3].innerHTML) - Number(rowB.cells[3].innerHTML));
    }
    table.append(...sortedRows);
  }

  sortGameStatistics() {
    this.isDirectOrderGame = !this.isDirectOrderGame;
    const lines = document.querySelectorAll('tr');
    const table = document.querySelector('table');
    let sortedRows;
    if (this.isDirectOrderGame) {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => Number(rowB.cells[4].innerHTML) - Number(rowA.cells[4].innerHTML));
    } else {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => Number(rowA.cells[4].innerHTML) - Number(rowB.cells[4].innerHTML));
    }
    table.append(...sortedRows);
  }

  sortErrorStatistics() {
    this.isDirectOrderError = !this.isDirectOrderError;
    const lines = document.querySelectorAll('tr');
    const table = document.querySelector('table');
    let sortedRows;
    if (this.isDirectOrderError) {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => Number(rowB.cells[5].innerHTML) - Number(rowA.cells[5].innerHTML));
    } else {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => Number(rowA.cells[5].innerHTML) - Number(rowB.cells[5].innerHTML));
    }
    table.append(...sortedRows);
  }

  sortPercentStatistics() {
    this.isDirectOrderPercent = !this.isDirectOrderPercent;
    const lines = document.querySelectorAll('tr');
    const table = document.querySelector('table');
    let sortedRows;
    if (this.isDirectOrderPercent) {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => Number(rowB.cells[6].innerHTML) - Number(rowA.cells[6].innerHTML));
    } else {
      sortedRows = Array.from(lines)
        .slice(1)
        .sort((rowA, rowB) => Number(rowA.cells[6].innerHTML) - Number(rowB.cells[6].innerHTML));
    }
    table.append(...sortedRows);
  }
}
