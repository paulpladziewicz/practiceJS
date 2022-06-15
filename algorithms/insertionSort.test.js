import { insertionSort } from "./insertionSort.js";

describe('Selection Sort', () => {
    test('array of numbers', () => {
        const arrayOfNumbers = [2, 1, 5, 3, 4, 9, 6, 7];
        const sortedArray = insertionSort(arrayOfNumbers);
        console.log(sortedArray);
        const comparableSortedArray = arrayOfNumbers.sort();
        expect(sortedArray).toStrictEqual(comparableSortedArray);
    });
});
