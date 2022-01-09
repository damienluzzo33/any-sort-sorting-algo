"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bubble = void 0;
class Bubble {
    constructor(collection) {
        this.collection = collection;
    }
    bubbleSort() {
        for (let i = 0; i < this.collection.length; i++) {
            for (let j = 0; j < this.collection.length; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Bubble = Bubble;
