//Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let positiveArr = arr.filter(num => num > 0);

let sum = positiveArr.reduce((a, b) => a + b, 0);

let count = positiveArr.length;

alert('Сума позитивних елементів = ' + sum + '\nКількість позитивних елементів = ' + count);

//Знайти мінімальний елемент масиву та його порядковий номер.
let min = Math.min(...arr);

let index = arr.indexOf(min);

alert('Мінімальний елемент масиву: ' + min + '\nПорядковий номер мінімального елементу масиву: ' + index);

//Знайти максимальний елемент масиву та його порядковий номер.
let max = Math.max(...arr);

let indexx = arr.indexOf(max);

alert('Максимальний елемент масиву: ' + max + '\nПорядковий номер максимального елементу масиву: ' + indexx);

//Визначити кількість негативних елементів.
let negativeArr = arr.filter(num => num < 0);

let countt = negativeArr.length;

alert('Кількість негативних елементів: ' + countt);

//Знайти кількість непарних позитивних елементів.
let oddPositiveArr = arr.filter (num => num > 0 && num % 2 !==0);

let counttt = oddPositiveArr.length;

alert('Кількість непарних позитивних елементів: ' + counttt);

//Знайти кількість парних позитивних елементів.
let evenPositiveArr = arr.filter(num => num > 0 && num % 2 === 0);

let countttt = evenPositiveArr.length;

alert('Кількість парних позитивних елементів: ' + countttt);

//Знайти суму парних позитивних елементів.
let evenPositiveArrr = arr.filter(num => num > 0 && num % 2 ===0);

let summ = evenPositiveArrr.reduce((a, b) => a + b, 0);

alert('Сума парних позитивних елементів: ' + summ);

//Знайти суму непарних позитивних елементів.
let addPositiveArrrr = arr.filter(num => num > 0 && num % 2 !== 0);

let summm = addPositiveArrrr.reduce((a, b) => a + b, 0);

alert('Сума непарних позитивних елементів: ' + summm);

//Знайти добуток позитивних елементів.
let positiveArrr = arr.filter(num => num > 0);

let product = positiveArrr.reduce((a, b) => a * b, 1);

alert('Добуток позитивних елементів: ' + product);

//Знайти найбільший серед елементів масиву, інші обнулити.
let maxElement = Math.max(...arr);

arr.fill(0);

arr[arr.indexOf(maxElement)] = maxElement;

alert('Найбільший елемент серед елементів масиву: ' + maxElement + '\nМасив після обнулення: ' + arr);
