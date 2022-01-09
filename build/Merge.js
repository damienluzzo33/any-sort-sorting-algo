"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Merge = void 0;
class Merge {
    mergeHelper(arg1, arg2) {
        let finalResult = this.initializer();
        let newArg1 = this.convert(arg1);
        let newArg2 = this.convert(arg2);
        let i = 0;
        let j = 0;
        while (i < arg1.length && j < arg2.length) {
            if (this.compare(i, j)) {
                finalResult = this.merge(finalResult, newArg1[i]);
                i++;
            }
            else if (this.compare(j, i)) {
                finalResult = this.merge(finalResult, newArg2[j]);
                j++;
            }
        }
        while (i < arg1.length) {
            finalResult = this.merge(finalResult, newArg1[i]);
            i++;
        }
        while (j < arg2.length) {
            finalResult = this.merge(finalResult, newArg2[j]);
            j++;
        }
        let newFinal = this.convertBack(finalResult);
        return newFinal;
    }
    mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        let middle = Math.floor(arr.length / 2);
        let leftHalfArr = this.mergeSort(this.slice(arr, 0, middle));
        let rightHalfArr = this.mergeSort(this.slice(arr, middle, arr.length + 1));
        return this.mergeHelper(leftHalfArr, rightHalfArr);
    }
}
exports.Merge = Merge;
