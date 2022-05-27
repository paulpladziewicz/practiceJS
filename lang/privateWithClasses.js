class privateClass {
    #a = 'private';
    b = 'public';

    constructor() {
        this.#getA();
    }

    #getA() {
        return this.#a;
    }

    getB() {
        return this.b;
    }
}

b = new privateClass();

// console.log(b['#getA']()); TypeError: b.#getA is not a function
// console.log(b.getB())
console.log(b)