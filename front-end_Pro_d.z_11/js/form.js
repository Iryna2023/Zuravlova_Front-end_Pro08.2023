let sum = (function() {
    let a = 0;
    return function(b) {
        a += b;
        alert(a);
        return a;
    }
})();

let userInput =  prompt('Введіть перше число, будь ласка:');

sum(Number(userInput));
sum(5);
sum(20);
sum(35);