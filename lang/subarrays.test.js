describe('Subarrays with slice(), splice(), fill(), and copyWithin()', () => {
    let word = 'Hello, World';
    let arr = [1,2,3,4,5,6,7,8,9,10];

    test('slice()', () => {
        // Slice, returns new array of specified values

        let value = word.slice(7,10)
        expect(value).toBe('Wor');

        value = arr.slice(0,3)
        expect(value).toStrictEqual([1,2,3]);

        value = arr.slice(4)
        expect(value).toStrictEqual([5,6,7,8,9,10]);

        value = arr.slice(-2)
        expect(value).toStrictEqual([9,10]);

        value = arr.slice(-4, -1)
        expect(value).toStrictEqual([7,8,9]);
    })

    test('.splice()', () => {
        // alters existing array and returns array of values
        // .splice(start, deleteCount, (optional elements to add after start) item1, item2, ...)
        // second arg is delete count, not end value

        let value = arr.splice(1,3)
        expect(value).toStrictEqual([2,3,4]);
        expect(arr).toStrictEqual([1,5,6,7,8,9,10]);

        value = arr.splice(-3)
        expect(value).toStrictEqual([8,9,10]);
        expect(arr).toStrictEqual([1,5,6,7]);

        value = arr.splice(-3, 1)
        expect(value).toStrictEqual([5]);
        expect(arr).toStrictEqual([1,6,7]);

        value = arr.splice(3, 4)
        // returns empty array if no elements deleted
        expect(value).toStrictEqual([]);
        expect(arr).toStrictEqual([1,6,7]);

        value = arr.splice(1, 0, 'a', 'b')
        // returns empty array if no elements deleted
        expect(value).toStrictEqual([]);
        expect(arr).toStrictEqual([1, 'a', 'b', 6, 7]);

        value = arr.splice(1, 2, ['a', 'b'])
        // unlike concat(), splice() inserts arrays themselves, not the elements of those arrays
        expect(value).toStrictEqual(['a', 'b']);
        expect(arr).toStrictEqual([1, ['a', 'b'], 6, 7]);
    })

    test('.fill()', () => {
        // sets the elements of an array, or a slice of an array, to a specified value
        // mutates the array it is called on, and also returns the modified array
        // Params
        //   value – Value to fill the array with. (Note all elements in the array will be this exact value.)
        //   start – Start index, default 0.
        //   end – End index, default arr.length.

        arr = new Array(3);

        let value = arr.fill('a')
        expect(value).toStrictEqual(['a', 'a', 'a']);
        expect(arr).toStrictEqual(['a', 'a', 'a']);

        value = arr.fill('b', 2)
        expect(value).toStrictEqual(['a', 'a', 'b']);

        value = arr.fill(1, 1, 2)
        expect(value).toStrictEqual(['a', 1, 'b']);

    })

    test('.copyWithin()', () => {
        // copies a slice of an array to a new position within the array
        // modifies in place, and returns the modified array
        // array length will not change
        // .copyWithin(destination index, start, end)

        arr = [1,2,3,4,5,6,7,8,9,10];

        let value = arr.copyWithin(5, 0, 5)
        expect(value).toStrictEqual([1,2,3,4,5,1,2,3,4,5]);
        expect(arr).toStrictEqual([1,2,3,4,5,1,2,3,4,5]);

        value = arr.copyWithin(3)
        expect(value).toStrictEqual([1,2,3,1,2,3,4,5,1,2]);

        value = arr.copyWithin(1, 2)
        expect(value).toStrictEqual([1,3,1,2,3,4,5,1,2,2]);

    })
})