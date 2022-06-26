class QuickSort {
    constructor(array) {
        this.array = array;
    }

    partition(leftPointer, rightPointer) {
        let pivotIndex = rightPointer;
        let pivot = this.array[pivotIndex];

        rightPointer -= 1;

        while (true) {
            while (this.array[leftPointer] < pivot) {
                leftPointer++;
            }
            while (this.array[rightPointer] < pivot) {
                rightPointer--;
            }
        }
    }
}