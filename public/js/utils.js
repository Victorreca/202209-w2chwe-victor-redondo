import { defaultState } from "./config.js";

export const getGridElements = (rows, columns) => {
  const initialColumns = new Array(columns);
  const initialRows = new Array(rows);

  const intialColumnsWihtDefaultState = initialColumns.fill(defaultState);
  const intialRowsWithDeafultState = initialRows.fill(
    intialColumnsWihtDefaultState
  );

  return intialRowsWithDeafultState;
};
