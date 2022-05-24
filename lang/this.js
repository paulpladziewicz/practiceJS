function globalFunction () {
    return this; // returns Node global object
}

// arrow functions inherit the this value of the context where they are defined
const arrow = () => {
    return this; // returns empty object
}

const funcExpression = function () {
    return this; // returns Node global object
}

console.log(funcExpression())