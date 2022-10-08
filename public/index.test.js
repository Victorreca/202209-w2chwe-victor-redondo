import { numberOfColumns, numberOfRows } from "./js/config.js";
import { getGridElements } from "./js/utils.js";

describe("Given the number of rows and columns", () => {
  describe("When number of columns are 3 and number of rows are 3", () => {
    test("Then it should retun an array of 3 elements with 3 elements inside", () => {
      const result = getGridElements(numberOfRows, numberOfColumns);
      console.log(result);
      const expectedArray = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      expect(result).toStrictEqual(expectedArray);
    });
  });
});
