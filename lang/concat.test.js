test('concat()', () => {
    // creates and returns new array
    // used to merge two or more arrays
    // the array elements themselves are concatenated, not the array itself
    // does not flatten arrays within arrays
    // if you do not need a new array, this is an expensive operation; use .push() or .splice()

    let a = [1,2,3];
    let b = [4,5,6];

    let value = a.concat(b);
    expect(value).toStrictEqual([1,2,3,4,5,6]);
})