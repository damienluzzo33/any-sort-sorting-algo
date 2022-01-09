// import { NumbersArray } from "./NumbersArray";
// import { Sorter } from "./Sorter";
import { NumArray } from "./NumArray";
import { Bubble } from "./Bubble";
import { StringCollection } from "./StringCollection";
import { LinkedList } from "./LinkedList";

const myString = "HelloWorld";
const myStrInput = new StringCollection(myString);
myStrInput.bubbleSort();
console.log(myStrInput.data);

const myNumbersArray = [11, 33, 9, 3];
const myNumArray = new NumArray(myNumbersArray);
myNumArray.bubbleSort();
console.log(myNumArray.data);

const myLinkedList = new LinkedList();
myLinkedList.add(11);
myLinkedList.add(33);
myLinkedList.add(9);
myLinkedList.add(3);
myLinkedList.bubbleSort();
console.log(myLinkedList.print());

