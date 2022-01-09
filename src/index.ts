// import { NumbersArray } from "./NumbersArray";
// import { Sorter } from "./Sorter";
import { NumArray } from "./NumArray";
import { Bubble } from "./Bubble";
import { StringCollection } from "./StringCollection";
import { LinkedList } from "./LinkedList";

class SortMyData {
    constructor(public data: number[] | string | LinkedList) {};

    runSort() {
        if (typeof this.data === "string") {
            const newString = new StringCollection(this.data);
            const newStrSort = new Bubble(newString);
            newStrSort.bubbleSort();
            console.log(newString.data);
        } else if (this.data instanceof LinkedList) {
            const newList = this.data;
            const newLinkSort = new Bubble(newList);
            newLinkSort.bubbleSort();
            const sorted = newList.print();
            console.log(sorted);
        } else if (this.data instanceof Array) {
            const newNumArray = new NumArray(this.data);
            const newSort = new Bubble(newNumArray);
            newSort.bubbleSort();
            console.log(newNumArray.data);
        }
    }
}

const myLinkedList = new LinkedList();
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