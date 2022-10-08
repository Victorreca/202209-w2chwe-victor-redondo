// const getGridElements = (rows, columns) => {
//   const rowItems = new Array(rows);
//   const columnsItems = new Array(columns);

//   const result = [];
//   for (let i = 0; i < rowItems; i++) {
//     result[i] = [0, 0, 0];

//   }
// };

export const getGridElements = (rows) => {
  const arrayRowAndColumns = [];
  for (let i = 0; i < rows; i++) {
    arrayRowAndColumns[i] = [0, 0, 0];
  }
  return arrayRowAndColumns;
};

// const rowItems = new Array(rows);
// console.log({ rows });
// const result = rowItems.map(() => "");
// console.log({ result });
// return result;
