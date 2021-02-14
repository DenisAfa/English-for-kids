
export default function sortData(column, isDataNumber = false, isDirectOrder) {
    const lines = document.querySelectorAll('tr');
    let sortedRows
    if (isDataNumber) {
        if (isDirectOrder) {
            sortedRows = Array.from(lines)
              .slice(1)
              .sort((rowA, rowB) => Number(rowB.cells[column].innerHTML) - Number(rowA.cells[column].innerHTML));
          } else {
            sortedRows = Array.from(lines)
              .slice(1)
              .sort((rowA, rowB) => Number(rowA.cells[column].innerHTML) - Number(rowB.cells[column].innerHTML));
          }
    } else {
        if (isDirectOrder) {
            sortedRows = Array.from(lines)
              .slice(1)
              .sort((rowA, rowB) => (rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? 1 : -1));
          } else {
            sortedRows = Array.from(lines)
              .slice(1)
              .sort((rowA, rowB) => (rowA.cells[column].innerHTML < rowB.cells[column].innerHTML ? 1 : -1));
          }
    }
    return sortedRows
}