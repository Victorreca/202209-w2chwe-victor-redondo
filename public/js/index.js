import { getGridElements } from "./utils.js";
import { numberOfColumns, numberOfRows } from "./config.js";

const result = getGridElements(numberOfRows, numberOfColumns);

console.log({ result });
