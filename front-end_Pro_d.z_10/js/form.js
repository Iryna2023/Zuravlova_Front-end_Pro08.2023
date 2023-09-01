//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let arr = [1, 2, 'a', 'b', 3, 4, 'c', 5];

let sum = 0;

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        sum += arr[i];
        count++;
    }
}

let average = sum / count;

alert(`Середнє арифметичне числових елементів даного масиву = ${average}`);

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
let x = prompt('Введіть, будь ласка, перше число:');

let znak = prompt('Введіть, будь ласка, знак операції (+, -, *, /, %, або ^):');

let y = prompt('Введіть, будь ласка, друге число:');

doMath(x, znak, y);

function doMath(x, znak, y) {
    let result;

    switch (znak) {
        case '+' :
            result = Number(x) + Number(y);
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            alert('Невідомий знак операції');
    }

    alert(`Результат операції = ${x} ${znak} ${y} = ${result}`);
}

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач. 

    let rows = prompt('Введіть, будь ласка, кількість рядків:');

    let cols = prompt('Введіть, будь ласка, кількість стовпців:');

    let arrr = [];

    for (let i = 0; i < rows; i++) {
        arrr[i] = [];

        for (let j = 0; j < cols; j++) {
            arrr[i][j] = prompt(`Введіть, будь ласка, значення елемента [${i}][${j}]:`)
        }
    }

    alert(`Двомірний масив: ${JSON.stringify(arrr)}`);

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
let str = prompt('Введіть вихідний рядок, будь ласка:');

let chars = prompt('Введіть символи для видалення з нього, будь ласка:');

removeChars(str, chars);

function removeChars(str, chars) {
    let resultt = '';

    for(let i = 0; i < str.length; i++) {
        if (!chars.includes(str[i])) {
            resultt += str[i];
        }
    }

    alert(`Результат: ${resultt}`);
}