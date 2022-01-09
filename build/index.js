"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { NumbersArray } from "./NumbersArray";
// import { Sorter } from "./Sorter";
const NumArray_1 = require("./NumArray");
const Bubble_1 = require("./Bubble");
// const newNumArray = new NumbersArray([11,3,33,9])
// const newSort = new Sorter(newNumArray);
// const sorted = newSort.mergeSort();
// console.log(sorted);
const newNumArray = new NumArray_1.NumArray([11, 3, 33, 9]);
const newSort = new Bubble_1.Bubble(newNumArray);
newSort.bubbleSort();
console.log(newNumArray.data);
