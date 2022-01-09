import { Bubble } from "./Bubble";

export class StringCollection extends Bubble {
    constructor(public data: string) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(left: number, right: number): boolean {
        return (this.data[left].toLowerCase() > this.data[right].toLowerCase());
    }

    swap(left: number, right: number): void {
        const arrayVersion = this.data.split('');

        [arrayVersion[left], arrayVersion[right]] = [arrayVersion[right], arrayVersion[left]];
        
        this.data = arrayVersion.join('');
    }
}