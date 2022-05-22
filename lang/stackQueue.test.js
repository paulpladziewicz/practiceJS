describe('Stack and Queues with push(), pop(), shift(), unshift()', () => {
    test('push & pop', () => {
        let a = [];

        let value = a.push(1, 2, 3);
        expect(value).toBe(3);
        expect(a).toStrictEqual([1, 2, 3]);

        value = a.pop();
        expect(value).toBe(3)
    })

    test('shift unshift', () => {
        // remember, whole array has to shift with these operations

        let a = []

        let value = a.unshift(1, 2, 3);
        expect(value).toBe(3);
        expect(a).toStrictEqual([1,2,3]);

        value = a.shift();
        expect(value).toBe(1);
    })
})