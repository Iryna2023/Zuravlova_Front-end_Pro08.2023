//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let numbers = '';

for (let i = 20; i <= 30; i += 0.5) {
    numbers += i + ' ';
}

alert(numbers);

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let dollarExchangeRate = 27;

let calculation = '';

for (let i = 10; i <= 100; i += 10) {
    let cost = i * dollarExchangeRate;
    calculation += i + ' * 27.00 = ' + cost + 'грн.,\n';
}

calculation = calculation.slice(0, -2);

alert(calculation);

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let n = 25;

let theNumbers = '';

for (let i = 1; i <= 100; i++) {
    if (i * i <= n) {
        theNumbers += i + ', ';
    } else {
        break;
    }
}

theNumbers = theNumbers.slice(0, -2);

alert(theNumbers);

//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if(num % i === 0) return false;
    }
    return num !== 1;
}

let numberrr = 37;

if (isPrime(numberrr)) {
    alert(numberrr + ' - число є простим');
} else {
    alert(numberrr + ' - число не є простим');
}

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
function thirdDegree(numm) {
    if (numm <= 0) {
        return false;
    }
    while (numm % 3 === 0) {
        numm /= 3;
    }
    return numm === 1;
}

let numberr = 55;

if (thirdDegree(numberr)) {
    alert(number + ' - можна одержати це число шляхом зведення числа 3 у деякий ступінь.');
} else {
    alert(numberr + ' - не можна одержати це число шляхом зведення числа 3 у деякий ступінь');
}