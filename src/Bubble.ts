interface SortItem {
    length: number;
    compare(left: number, right: number): boolean;
    swap(left: number, right: number): void;
}

export class Bubble {
    constructor(public collection: SortItem) {}

    bubbleSort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j+1)) {
                    this.collection.swap(j, j+1);
                }
            }
        }
    }
}
