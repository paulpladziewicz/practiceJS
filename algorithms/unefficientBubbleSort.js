export function unefficientBubbleSort(array) {
    let complete = 0;

    while (!complete) {
        let changesMade = 0;
        for (let i = 0; i < array.length - 1; i++) {
            let pointer1 = array[i];
            let pointer2 = array[i + 1];

            let comparedResult = compareBubbleSortPointers(pointer1, pointer2);

            if (comparedResult === -1) {
                if (array[i] === pointer1 && array[i + 1] === pointer2) continue;
                array[i] = pointer1;
                array[i + 1] = pointer2;
                changesMade++;
            }

            if (comparedResult === 1) {
                if (array[i] === pointer2 && array[i + 1] === pointer1) continue;
                array[i] = pointer2;
                array[i + 1] = pointer1;
                changesMade++;
            }
        }

        if (changesMade === 0) {
            complete = 1;
        }

        changesMade = 0;
    }

    return array;
}

function compareBubbleSortPointers(pointer1, pointer2) {
    if (pointer1 === pointer2) {
        return 0;
    }

    if (pointer1 < pointer2) {
        return -1;
    }

    if (pointer1 > pointer2) {
        return 1;
    }
}