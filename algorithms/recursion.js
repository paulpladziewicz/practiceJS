function testRecursion(num) {
    if (num < 0) return;
    testRecursion(num - 1);
    console.log(num)
}

testRecursion(5);

// Top down is elegant, and we need recursion to do so.
function factorial(num) {
    if (num === 0) return 1;

    return num * factorial(num - 1);
}

console.log(factorial(5));

// no different than a loop; might as well use a loop
function factorialBottomUp(n, i = 1, product = 1) {
    if (i > n) return product;
    return factorialBottomUp(n, i + 1, product * i);
}

console.log(factorialBottomUp(5));