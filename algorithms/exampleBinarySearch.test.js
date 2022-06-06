import {binarySearch} from "./exampleBinarySearch.js";

describe('Binary Search', () => {
    it('should work with array1', () => {
        let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        expect(binarySearch(array1, 19)).toBe(18);
    })

    it('should work with array1', () => {
        let array2 = [1,5,20,50,230,3592,39022,3920302];

        expect(binarySearch(array2, 39022)).toBe(6);
    })
})