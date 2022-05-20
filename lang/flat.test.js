describe('flat() & flatMap()', () => {
    test('flat()', () => {
        // flatten arrays which have arrays
        // optional argument for # of levels deep, 1 by default
        // creates and returns a new array

        let a = [1, 2, [3, 4]];

        let value = a.flat();
        expect(value).toStrictEqual([1, 2, 3, 4]);
        expect(a).toStrictEqual([1, 2, [3, 4]]);

        a = [1, 2, [3, [4, 5]]];
        value = a.flat(2);
        expect(value).toStrictEqual([1, 2, 3, 4, 5]);
    })

    test('flatMap()', () => {
        // equivalent of a.map(f).flat()

        let a = [-2, -1, 1, 2];

        let value = a.flatMap(x => x < 0 ? [] : x);
        expect(value).toStrictEqual([1, 2]);
        expect(a).toStrictEqual([-2, -1, 1, 2]);
    })
})