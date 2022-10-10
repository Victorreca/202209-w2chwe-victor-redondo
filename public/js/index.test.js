import { numberOfColumns, numberOfRows } from "./config.js";
import { getGridElements, gridElementsWitchState } from "./utils.js";

describe("Given the number of rows and columns", () => {
  describe("When number of columns are 3 and number of rows are 3", () => {
    test("Then it should return an array of 3 elements with 3 elements inside wiht teh death state value", () => {
      const result = getGridElements(numberOfRows, numberOfColumns);

      const expectedGrid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      expect(result).toStrictEqual(expectedGrid);
    });
  });

  describe("When a cell hast state alive and has less than 2 alive cells around", () => {
    test("Then it should change its state to death", () => {
      const previousGrid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const currentGrid = gridElementsWitchState(previousGrid);

      const expectedState = 0;
      const currentCellValue = currentGrid[1][1];

      expect(currentCellValue).toStrictEqual(expectedState);
    });
  });

  describe("When a cell has state alive and has more than 3 alive cells around", () => {
    test("Then it should change his state to death", () => {
      const previousGrid = [
        [1, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ];
      const currentGrid = gridElementsWitchState(previousGrid);

      const expectedState = 0;
      const currentCellValue = currentGrid[1][1];

      expect(currentCellValue).toStrictEqual(expectedState);
    });
  });

  describe("When a cell has state death and has 3 alive cells around", () => {
    test("Then it should change his state to alive", () => {
      const previousGrid = [
        [0, 1, 1],
        [0, 0, 1],
        [0, 0, 0],
      ];
      const currentGrid = gridElementsWitchState(previousGrid);

      const expectedState = 1;
      const currentCellValue = currentGrid[1][1];

      expect(currentCellValue).toStrictEqual(expectedState);
    });
  });

  describe("When a cell has state death and has less than 3 alive cells around", () => {
    test("Then it should return the same state", () => {
      const previousGrid = [
        [0, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const currentGrid = gridElementsWitchState(previousGrid);

      const expectedState = 0;
      const currentCellValue = currentGrid[1][1];

      expect(currentCellValue).toStrictEqual(expectedState);
    });
  });
  describe("When a cell has state death and has more than 3 alive cells around", () => {
    test("Then it should return the same state", () => {
      const previousGrid = [
        [1, 1, 1],
        [1, 0, 0],
        [0, 0, 0],
      ];
      const currentGrid = gridElementsWitchState(previousGrid);

      const expectedState = 0;
      const currentCellValue = currentGrid[1][1];

      expect(currentCellValue).toStrictEqual(expectedState);
    });
  });
});
