import { Bubble } from "./Bubble";

export class NumArray extends Bubble {
    constructor(public data: number[]) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(left: number, right: number): boolean {
        return this.data[left] > this.data[right];
    }

    swap(left: number, right: number): void {
        [this.data[left], this.data[right]] = [this.data[right], this.data[left]];
    }

    runBubbleSort() {

    }
}
