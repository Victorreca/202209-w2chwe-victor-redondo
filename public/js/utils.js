import { defaultState } from "./config.js";

export const getGridElements = (rows, columns) => {
  const initialColumns = new Array(columns);
  const initialRows = new Array(rows);

  const intialColumnsWihtState = initialColumns.fill(defaultState);
  const intialRowsWithState = initialRows.fill(intialColumnsWihtState);

  return intialRowsWithState;
};
