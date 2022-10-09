import { defaultState, states } from "./config.js";

export const getGridElements = (rows, columns) => {
  const initialColumns = new Array(columns);
  const initialRows = new Array(rows);

  const intialColumnsWihtState = initialColumns.fill(defaultState);
  const intialRowsWithState = initialRows.fill(intialColumnsWihtState);

  return intialRowsWithState;
};

const checkUpperLeftCell = (grid, rowIndex, columnIndex) => {
  if (rowIndex === 0) return false;
  if (columnIndex === 0) return false;

  const positionUpLeftCell = grid[rowIndex - 1][columnIndex - 1];
  const isAliveCell = positionUpLeftCell === states.alive;
  return isAliveCell;
};

const checkUpperCell = (grid, rowIndex, columnIndex) => {
  if (rowIndex === 0) return false;

  const positionUpCell = grid[rowIndex - 1][columnIndex];
  const isAliveCell = positionUpCell === states.alive;
  return isAliveCell;
};

const checkUpperRightCell = (grid, rowIndex, columnIndex) => {
  if (rowIndex === 0) return false;
  if (columnIndex === grid[0].length - 1) return false;

  const positionUpRightCell = grid[rowIndex - 1][columnIndex + 1];
  const isAliveCell = positionUpRightCell === states.alive;
  return isAliveCell;
};

const checkLeftCell = (grid, rowIndex, columnIndex) => {
  if (columnIndex === 0) return false;

  const positionLeftCell = grid[rowIndex][columnIndex - 1];
  const isAliveCell = positionLeftCell === states.alive;
  return isAliveCell;
};

const checkRightCell = (grid, rowIndex, columnIndex) => {
  if (columnIndex === grid[0].length - 1) return false;

  const positionRightCell = grid[rowIndex][columnIndex + 1];
  const isAliveCell = positionRightCell === states.alive;
  return isAliveCell;
};

const checkDownLeftCell = (grid, rowIndex, columnIndex) => {
  if (columnIndex === 0) return false;
  if (rowIndex === grid.length - 1) return false;

  const positionDownLeftCell = grid[rowIndex + 1][columnIndex - 1];
  const isAliveCell = positionDownLeftCell === states.alive;
  return isAliveCell;
};

const checkDownCell = (grid, rowIndex, columnIndex) => {
  if (rowIndex === grid.length - 1) return false;

  const positionDownCell = grid[rowIndex + 1][columnIndex];
  const isAliveCell = positionDownCell === states.alive;
  return isAliveCell;
};

const checkDownRightCell = (grid, rowIndex, columnIndex) => {
  if (rowIndex === grid.length - 1) return false;
  if (columnIndex === grid[0].length - 1) return false;

  const positionDownRightCell = grid[rowIndex + 1][columnIndex + 1];
  const isAliveCell = positionDownRightCell === states.alive;
  return isAliveCell;
};

const cellAliveNeighbours = (grid, row, column) => {
  let currentAliveNeighbours = 0;

  const neighbourAliveUperleftCell = checkUpperLeftCell(grid, row, column);
  if (neighbourAliveUperleftCell) currentAliveNeighbours++;

  const neighbourAliveUperCell = checkUpperCell(grid, row, column);
  if (neighbourAliveUperCell) currentAliveNeighbours++;

  const neighbourAliveUperRightCell = checkUpperRightCell(grid, row, column);
  if (neighbourAliveUperRightCell) currentAliveNeighbours++;

  const neighbourAliveLeftCell = checkLeftCell(grid, row, column);
  if (neighbourAliveLeftCell) currentAliveNeighbours++;

  const neighbourAliveRightCell = checkRightCell(grid, row, column);
  if (neighbourAliveRightCell) currentAliveNeighbours++;

  const neighbourAliveDownLeftCell = checkDownLeftCell(grid, row, column);
  if (neighbourAliveDownLeftCell) currentAliveNeighbours++;

  const neighbourAliveDownCell = checkDownCell(grid, row, column);
  if (neighbourAliveDownCell) currentAliveNeighbours++;

  const neighbourAliveDownRightCell = checkDownRightCell(grid, row, column);
  if (neighbourAliveDownRightCell) currentAliveNeighbours++;

  return currentAliveNeighbours;
};

export const gridElementsWitchState = (grid) => {
  const nextGrid = grid.map((row, rowIndex) =>
    row.map((value, columnIndex) => {
      const aliveNeighbourCell = cellAliveNeighbours(
        grid,
        rowIndex,
        columnIndex
      );
      const currentCellsAlive = value === states.alive;

      if (currentCellsAlive) {
        if (aliveNeighbourCell < 2) {
          return states.death;
        }
        if (aliveNeighbourCell > 3) {
          return states.death;
        }
      }
      if (!currentCellsAlive) {
        if (aliveNeighbourCell === 3) {
          return states.alive;
        }
      }
      return value;
    })
  );

  console.log(grid);
  console.log(nextGrid);

  return nextGrid;
};
