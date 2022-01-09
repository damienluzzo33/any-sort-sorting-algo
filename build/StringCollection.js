"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
class StringCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(left, right) {
        return (this.data[left].toLowerCase() >= this.data[right].toLowerCase());
    }
    swap(left, right) {
        const arrayVersion = this.data.split('');
        [arrayVersion[left], arrayVersion[right]] = [arrayVersion[right], arrayVersion[left]];
        this.data = arrayVersion.join('');
    }
}
exports.StringCollection = StringCollection;
