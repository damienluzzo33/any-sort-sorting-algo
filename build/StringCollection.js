"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const Bubble_1 = require("./Bubble");
class StringCollection extends Bubble_1.Bubble {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(left, right) {
        return (this.data[left].toLowerCase() > this.data[right].toLowerCase());
    }
    swap(left, right) {
        const arrayVersion = this.data.split('');
        [arrayVersion[left], arrayVersion[right]] = [arrayVersion[right], arrayVersion[left]];
        this.data = arrayVersion.join('');
    }
}
exports.StringCollection = StringCollection;
