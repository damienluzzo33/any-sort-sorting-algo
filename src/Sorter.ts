import { NumbersArray } from "./NumbersArray";

export class Sorter {

    constructor(public collection: NumbersArray) {}
    
    protected mergeHelper(arg1: NumbersArray, arg2: NumbersArray): NumbersArray {
        let finalResult = this.collection.initializer();
        let newArg1 = this.collection.convert(arg1);
        let newArg2 = this.collection.convert(arg2);
        let i = 0;
        let j = 0;
        while (i < arg1.length && j < arg2.length) {
            if (this.collection.compare(i,j)) {
                finalResult = this.collection.concat(finalResult, newArg1[i])
                i++;
            } else if (this.collection.compare(j,i)) {
                finalResult = this.collection.concat(finalResult, newArg2[j])
                j++;
            }
        }
        while (i < arg1.length) {
            finalResult = this.collection.concat(finalResult, newArg1[i])
            i++;
        }
        while (j < arg2.length) {
            finalResult = this.collection.concat(finalResult, newArg2[j])
            j++;
        }

        let newFinal = new NumbersArray(finalResult);

        return newFinal;
    }

    mergeSort(arr: NumbersArray = this.collection): NumbersArray {

        console.log(arr);

        if (arr.length <= 1) {
            return arr;
        }
        let middle = Math.floor(arr.length / 2);

        let leftHalfArr = this.mergeSort(arr.slice(arr, 0, middle));
        let rightHalfArr = this.mergeSort(arr.slice(arr, middle, arr.length + 1));

        console.log(leftHalfArr, rightHalfArr)

        return this.mergeHelper(leftHalfArr, rightHalfArr);
    }
}
