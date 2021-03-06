export function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let lowestNumberIndex = i;

        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[lowestNumberIndex]) {
                lowestNumberIndex = j;
            }
        }

        if (lowestNumberIndex !== i) {
            let temp = array[i];
            array[i] = array[lowestNumberIndex];
            array[lowestNumberIndex] = temp;
        }
    }

    return array;
}