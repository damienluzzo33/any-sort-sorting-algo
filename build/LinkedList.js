"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            //* even though we are returning void, we can call an empty return statement to break out of the function
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
    }
    get length() {
        if (!this.head)
            return 0;
        let count = 1;
        let pointer = this.head;
        while (pointer.next) {
            count++;
            pointer = pointer.next;
        }
        return count;
    }
    find(index) {
        if (!this.head)
            throw new Error("That index doesn't exist!");
        let count = 0;
        //* need to specify type annotation here because pointer.next can eventually be null if that index passed in is length or greater
        let pointer = this.head;
        while (pointer) {
            if (count === index) {
                return pointer;
            }
            count++;
            pointer = pointer.next;
        }
        throw new Error("That index doesn't exist!");
    }
    compare(left, right) {
        if (!this.head)
            throw new Error("This list is empty!");
        return this.find(left).data > this.find(right).data;
    }
    swap(left, right) {
        [this.find(left).data, this.find(right).data] = [this.find(right).data, this.find(left).data];
    }
    print() {
        if (!this.head)
            throw new Error("You can't sort what can't be sorted!");
        return this.head;
        // if instead we want to return an array of values
        // let pointer: Node | null = this.head;
        // let returnArr: number[] = [];
        // while(pointer) {
        //     returnArr.push(pointer.data);
        //     pointer = pointer.next;
        // }
        // return returnArr;
    }
}
exports.LinkedList = LinkedList;
