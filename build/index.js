"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { NumbersArray } from "./NumbersArray";
// import { Sorter } from "./Sorter";
const NumArray_1 = require("./NumArray");
const Bubble_1 = require("./Bubble");
const StringCollection_1 = require("./StringCollection");
const LinkedList_1 = require("./LinkedList");
class SortMyData {
    constructor(data) {
        this.data = data;
    }
    ;
    runSort() {
        if (typeof this.data === "string") {
            const newString = new StringCollection_1.StringCollection(this.data);
            const newStrSort = new Bubble_1.Bubble(newString);
            newStrSort.bubbleSort();
            console.log(newString.data);
        }
        else if (this.data instanceof LinkedList_1.LinkedList) {
            const newList = this.data;
            const newLinkSort = new Bubble_1.Bubble(newList);
            newLinkSort.bubbleSort();
            const sorted = newList.print();
            console.log(sorted);
        }
        else if (this.data instanceof Array) {
            const newNumArray = new NumArray_1.NumArray(this.data);
            const newSort = new Bubble_1.Bubble(newNumArray);
            newSort.bubbleSort();
            console.log(newNumArray.data);
        }
    }
}
const myLinkedList = new LinkedList_1.LinkedList();
myLinkedList.add(11);
myLinkedList.add(42);
myLinkedList.add(33);
myLinkedList.add(9);
myLinkedList.add(3);
const myString = "HelloWorld";
const myNumbersArray = [11, 33, 9, 3, 23];
const newSort1 = new SortMyData(myLinkedList);
const newSort2 = new SortMyData(myString);
const newSort3 = new SortMyData(myNumbersArray);
newSort1.runSort();
newSort2.runSort();
newSort3.runSort();
