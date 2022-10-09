import { numberOfColumns, numberOfRows } from "./js/config.js";
import { getGridElements } from "./js/utils.js";

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

  // describe("When a cell hast state alive and has less than 2 alive cells around", () => {
  // test("Then it should change its state to death", () => {
  //   const previousGrid = [
  //     [0, 0, 0],
  //     [0, 0, 0],
  //     [0, 0, 0],
  //   ];
  //   const currentGrid = getGridElementsWithCurrentState(previousGrid);
  //   });
  // });
});
