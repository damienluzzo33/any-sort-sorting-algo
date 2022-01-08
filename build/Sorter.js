"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
const NumbersArray_1 = require("./NumbersArray");
class Sorter {
    //! need to change this so that strings are permissible
    constructor(collection) {
        this.collection = collection;
    }
    //! need to change this so that strings are permissible
    mergeHelper(arg1, arg2) {
        let finalResult = this.collection.initializer();
        let newArg1 = this.collection.convert(arg1);
        let newArg2 = this.collection.convert(arg2);
        let i = 0;
        let j = 0;
        while (i < arg1.length && j < arg2.length) {
            if (this.collection.compare(i, j)) {
                finalResult = this.collection.concat(finalResult, newArg1[i]);
                i++;
            }
            else if (this.collection.compare(j, i)) {
                finalResult = this.collection.concat(finalResult, newArg2[j]);
                j++;
            }
        }
        while (i < arg1.length) {
            finalResult = this.collection.concat(finalResult, newArg1[i]);
            i++;
        }
        while (j < arg2.length) {
            finalResult = this.collection.concat(finalResult, newArg2[j]);
            j++;
        }
        let newFinal = new NumbersArray_1.NumbersArray(finalResult);
        return newFinal;
    }
    //! need to change this so that strings are permissible
    mergeSort(arr = this.collection) {
        if (arr.length <= 1) {
            return arr;
        }
        let middle = Math.floor(arr.length / 2);
        let leftHalfArr = this.mergeSort(arr.slice(arr, 0, middle));
        let rightHalfArr = this.mergeSort(arr.slice(arr, middle, arr.length + 1));
        return this.mergeHelper(leftHalfArr, rightHalfArr);
    }
}
exports.Sorter = Sorter;
