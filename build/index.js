"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bubble_1 = require("./Bubble");
const StringCollection_1 = require("./StringCollection");
// const newNumArray = new NumbersArray([11,3,33,9])
// const newSort = new Sorter(newNumArray);
// const sorted = newSort.mergeSort();
// console.log(sorted);
// const newNumArray = new NumArray([11,3,33,9]);
// const newSort = new Bubble(newNumArray);
// newSort.bubbleSort();
const newString = new StringCollection_1.StringCollection('fedcba');
const newStrSort = new Bubble_1.Bubble(newString);
newStrSort.bubbleSort();
// console.log(newNumArray.data);
console.log(newString.data);
