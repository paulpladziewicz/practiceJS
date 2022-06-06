import UniqueStrings from "./1-1";

describe('function to determine if a string has all unique characters', () => {
    const arr = ['a', 'b', 'a', 'c', 'a', 'd', 'g', 'f', 'e', 'd'];

    it('should work with an array of characters as well', () => {
        expect(UniqueStrings(arr)).toBe(false);
    })

    it('should work with an array of characters as well', () => {
        expect(UniqueStrings(arr)).toBe(false);
    })

})