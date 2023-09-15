class SuperArray extends Array {
    constructor(...args) {
      super(...args);
      for (let el of this) {
        if (typeof el !== 'number') {
          throw new TypeError(`${el} is not a number`);
        }
      }
    }

    sum() {
        return this.reduce ((a, b) => a + b, 0);
    }
}

const numbers = new SuperArray(1, 2, 3, 4);
const total = numbers.sum();

alert(total);