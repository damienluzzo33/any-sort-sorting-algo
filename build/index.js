"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersArray_1 = require("./NumbersArray");
const Sorter_1 = require("./Sorter");
const newNumArray = new NumbersArray_1.NumbersArray([11, 3, 33, 9]);
const newSort = new Sorter_1.Sorter(newNumArray);
const sorted = newSort.mergeSort();
console.log(sorted);
//* The Main Merge Sort Function
