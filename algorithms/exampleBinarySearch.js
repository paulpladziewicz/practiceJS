export function binarySearch(array, search_value) {
    let lower_bound = 0;
    let upper_bound = array.length - 1;

    while (lower_bound <= upper_bound) {
        let midpoint = Math.floor((upper_bound + lower_bound) / 2);
        let value_at_midpoint = array[midpoint];

        if (search_value === value_at_midpoint) {
            return midpoint;
        }

        if (search_value < value_at_midpoint) {
            upper_bound = midpoint - 1;
        }

        if (search_value > value_at_midpoint) {
            lower_bound = midpoint + 1;
        }
    }

    return null;
}