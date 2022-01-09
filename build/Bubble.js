"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bubble = void 0;
class Bubble {
    bubbleSort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Bubble = Bubble;
