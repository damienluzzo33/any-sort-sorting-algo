export abstract class Bubble {
    abstract compare(left: number, right: number): boolean;
    abstract length: number;
    abstract swap(left: number, right: number): void;

    bubbleSort(): void {
        const { length } = this;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j+1)) {
                    this.swap(j, j+1);
                }
            }
        }
    }
}
