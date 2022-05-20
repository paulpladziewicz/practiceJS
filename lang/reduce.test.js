describe('reduce() & reduceRight()', () => {
    test('reduce()', () => {
        // combines the elements of an array using the function you specify to produce a single value
        // within functional programming, it goes by 'inject' and 'fold'
        let a = [1,2,3,4,5,6,7,8,9,10];

        // Accumulator is the first element of the array if no initial value passed
        // means without initial value, the first reducer func call will be with (a[0], a[1])
        // (accumulator, value, index, array) for reducer params
        let value = a.reduce((x, y) => x + y);
        expect(value).toBe(55);

        value = a.reduce((x, y) => x + y, 10);
        expect(value).toBe(65);

        // reduceRight works just like reduce, except that it processes the array from highest index to lowest (right-to-left)
    })
})