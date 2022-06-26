// Solution 1, with other data structures
function UniqueStrings(arr) {
    if (!arr) throw new Error('Array not defined.');

    const listOfStrings = {};

    for (let string of arr) {
        if (listOfStrings[string] === undefined) {
            listOfStrings[string] = 1;
            continue;
        }

        listOfStrings[string] = listOfStrings[string] + 1;
        console.log(listOfStrings)
    }

    for (let prop in listOfStrings) {
        if (listOfStrings[prop] > 1) {
            return false;
        }
    }

    return true;
}

export default UniqueStrings;