"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersArray = void 0;
class NumbersArray {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    convert(arr) {
        let final = [];
        const newObj = {
            *[Symbol.iterator]() {
                yield arr.data;
            }
        };
        let properties = [...newObj][0];
        console.log(properties);
        for (let i = 0; i < properties.length; i++) {
            console.log(properties[i]);
            final.push(properties[i]);
        }
        console.log(final);
        return final;
    }
    compare(first, second) {
        return this.data[first] < this.data[second];
    }
    initializer() {
        return [];
    }
    concat(arr, num) {
        return [...arr, num];
    }
    slice(arr, start, end) {
        let newArr = this.convert(arr);
        newArr = newArr.slice(start, end);
        return new NumbersArray(newArr);
    }
}
exports.NumbersArray = NumbersArray;
