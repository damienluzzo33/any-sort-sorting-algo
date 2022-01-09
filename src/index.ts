// import { NumbersArray } from "./NumbersArray";
// import { Sorter } from "./Sorter";
import { NumArray } from "./NumArray";
import { Bubble } from "./Bubble";
import { StringCollection } from "./StringCollection";

// const newNumArray = new NumbersArray([11,3,33,9])
// const newSort = new Sorter(newNumArray);
// const sorted = newSort.mergeSort();
// console.log(sorted);

// const newNumArray = new NumArray([11,3,33,9]);
// const newSort = new Bubble(newNumArray);
// newSort.bubbleSort();

const newString = new StringCollection('fedcba');
const newStrSort = new Bubble(newString);
newStrSort.bubbleSort();

// console.log(newNumArray.data);
console.log(newString.data);