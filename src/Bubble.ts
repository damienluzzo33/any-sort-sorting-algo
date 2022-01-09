import { NumArray } from "./NumArray";

export class Bubble {
    constructor(public collection: NumArray) {}

    bubbleSort(): void {
        const {length} = this.collection;
        
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (this.collection.compare(j, j+1)) {
                    this.collection.swap(j, j+1)
                }
            }
        }
    }
}
