export function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
       let tempValue = array[i];
       let position = i - 1;

        while (position >= 0) {
            if (array[position] > tempValue) {
                array[position + 1] = array[position];
                position -= 1;
            } else {
                break;
            }
        }

        array[position + 1] = tempValue;
    }

    return array;
}