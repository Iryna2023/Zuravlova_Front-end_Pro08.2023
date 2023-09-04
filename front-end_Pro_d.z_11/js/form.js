function sum() {
    let a = 0;
    return function(b) {
        a += b;
        alert(a);
        return a;
    }
}

let sumResult = sum();

let userInput =  prompt('Введіть перше число, будь ласка:');

sumResult(Number(userInput));
sumResult(5);
sumResult(20);
sumResult(35);