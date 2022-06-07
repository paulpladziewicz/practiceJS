import { unefficientBubbleSort } from "./unefficientBubbleSort.js";

describe('Bubble Sort', () => {
    test('array of numbers', () => {
        const arrayOfNumbers = [2, 1, 5, 3, 4, 9, 6, 7];
        const sortedArray = unefficientBubbleSort(arrayOfNumbers);
        const comparableSortedArray = arrayOfNumbers.sort();
        expect(sortedArray).toStrictEqual(comparableSortedArray);
    });
});
