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

let o = {
    p: 1,
    f: () => this, // returns empty object
    h: function () {
        return this.p + 2; // returns 3
    },
}

let z = {
    a: 1,
    m: function () {
        return f();

        function f () {
            return this; // returns global
        }
    },
    k: function () {
        let o = this;
        const f =  () => this === o; // returns true
        return f();
    },
    x: function () {
        let o = this;
        const f =  (function () {
          return this === o;
        }).bind(this);
        return f(); // returns true;
    }
}

console.log(z.x())