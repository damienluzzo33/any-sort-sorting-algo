class Sorter {
    constructor(public collection: number[]) {}

    protected mergeHelper(arr1: number[], arr2: number[]): number[] {
        let finalResult: number[] = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                finalResult.push(arr1[i]);
                i++;
            } else if (arr2[j] < arr1[i]) {
                finalResult.push(arr2[j]);
                j++;
            }
        }
        while (i < arr1.length) {
            finalResult.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            finalResult.push(arr2[j]);
            j++;
        }

        return finalResult;
    }

    mergeSort(arr = this.collection): number[] {
        if (arr.length <= 1) {
            return arr;
        }
        let middle = Math.floor(arr.length / 2);
        let leftHalfArr = this.mergeSort(arr.slice(0, middle));
        let rightHalfArr = this.mergeSort(arr.slice(middle));
        return this.mergeHelper(leftHalfArr, rightHalfArr);
    }
}

const newSort = new Sorter([11, 3, 33, 9]);
const sorted = newSort.mergeSort();


console.log(sorted);



//* The Main Merge Sort Function
