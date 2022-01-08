export class NumbersArray {
    constructor(public data: number[]) {}

    get length(): number {
        return this.data.length;
    }

    convert(arr: NumbersArray): number[] {
        let final: number[] = [];
        
        const newObj = {
            *[Symbol.iterator] () {
                yield arr.data;
            }
        }
        
        let properties = [...newObj][0];
        console.log(properties);
        for (let i = 0; i < properties.length; i++) {
            console.log(properties[i])
            final.push(properties[i])
        }
        console.log(final)
        return final;
    }

    compare(first: number, second: number): boolean {
        return this.data[first] < this.data[second];
    }

    initializer(): number[] {
        return [];
    }

    concat(arr: number[], num: number): number [] {
        return [...arr, num]
    }

    slice(arr: NumbersArray, start: number, end: number): NumbersArray {
        let newArr: number[] = this.convert(arr);
        newArr = newArr.slice(start,end); 

        return new NumbersArray(newArr);
    }

}