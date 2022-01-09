"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumArray = void 0;
class NumArray {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(left, right) {
        return this.data[left] > this.data[right];
    }
    swap(left, right) {
        [this.data[left], this.data[right]] = [this.data[right], this.data[left]];
    }
}
exports.NumArray = NumArray;
