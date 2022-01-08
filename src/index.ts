import { NumbersArray } from "./NumbersArray";
import { Sorter } from "./Sorter";

const newNumArray = new NumbersArray([11,3,33,9])

const newSort = new Sorter(newNumArray);
const sorted = newSort.mergeSort();


console.log(sorted);



//* The Main Merge Sort Function
