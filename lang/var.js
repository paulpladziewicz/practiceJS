// let a = 1;
// let a = 2;
// console.log(a);

// variable hoisting
// function varTest() {
//     console.log(a);
//     var a = 5;
//     console.log(a);
// }
//
// varTest();

let o = {a: '1', b: '2'};
let a = [a, b];

console.log(o);

let b = toString in o;

console.log(b);

for (let p in o) {
    console.log(o[p]);
}

for (let e in a ) console.log(a[e]);