//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let number = '';

for (let i= 10; i <=20; i++) {
    number += i + ', ';
}

number = number.slice(0, -2);

alert(number);

//Вивести квадрати чисел від 10 до 20.
let squares = '';

for (let i = 10; i <=20; i++) {
    let squre = i * i;

    squares += squre + ', ';
}

squares = squares.slice(0, -2);

alert(squares);

//Вивести таблицю множення на 7.
let multiplicationTable = '';

for (let i = 1; i <= 10; i++) {

   multiplicationTable += '7 x ' + i + ' = ' + 7 * i + '\n';

}

alert(multiplicationTable);

//Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;

for (let i = 1; i <= 15; i++) {
    if (i % 1 === 0) {
        sum += i;
    }
}

alert(sum);

//Знайти добуток усіх цілих чисел від 15 до 35.
let num = 1;

for (let i = 15; i <= 35; i++) {
    if (i % 1 === 0) {
        num *= i;
    }
}

alert(num);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let summ = 0;

let calculation = 0;

for (let i = 1; i <= 500; i++) {
    if (i % 1 === 0) {
        summ += i;
        calculation++;
    }
}

let average = summ / calculation;

alert(average);

//Вивести суму лише парних чисел в діапазоні від 30 до 80.
let summm = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        summm += i;
    }
}

alert (summm);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let numbers = [];

for (let i = 100; i <= 200; i++) {
    if (i % 3 ===0){
        numbers.push(i);
    }
}

alert(numbers);

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let integer = 20;

let divisors = [];

for (let i = 1; i <= integer; i++){
    if (integer % i === 0) {
        divisors.push(i);
    }
}

alert(divisors);

//Визначити кількість його парних дільників.

let divisor = [];

for (var i = 1; i <= integer; i++) {
    if (integer % i === 0) {
        if (i % 2 === 0) {
            divisor.push(i);
        }
    }
}

alert(divisor);

//Знайти суму його парних дільників.

let sumDivisors = 0;

for (var i = 1; i <= integer; i++) {
    if (integer % i === 0) {
        if (i % 2 === 0) {
            sumDivisors += i;
        }
    }
}

alert(sumDivisors);

//Надрукувати повну таблицю множення від 1 до 10.
let table = '';

for (let i = 1; i <=10; i++) {
    for (let j=1; j <= 10; j++) {
        table += i + ' x ' + j + ' = ' + i * j + '' + '.  ';
    }
    table += '\n';
}

alert(table);