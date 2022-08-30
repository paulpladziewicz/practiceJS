// returns the Nth number in the fibonacci sequence
function fib(n) {
   if (n === 0 || n === 1) return n;

   return fib(n - 2) + fib(n - 1);
}

const memoObject = {};
function fibMemo(n, memo) {
    if (n === 0 || n === 1) return n;

    if (!memo[n]) {
        memo[n] = fibMemo(n - 2, memo) + fibMemo(n - 1, memo);
    }
    return memo[n];
}

function bottomUpFib(n) {
    if (n === 0) {
        return 0;
    }

    let a = 0;
    let b = 1;

    for (let i = 1; i < n; i++) {
        let temp = a;
        a = b;
        b = temp + a;
    }

    return b;
}

console.log(fibMemo(10, memoObject));