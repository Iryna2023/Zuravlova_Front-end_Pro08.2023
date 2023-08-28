//Створити масив, довжину та елементи якого задає користувач.
let length = prompt('Введіть, будь ласка, довжину масиву:');

let arr = new Array(length);

for (let i = 0; i < length; i++) {
    arr[i] = prompt(`Введіть, будь ласка, елементи масиву з індексом ${i + 1}:`, "");
}

alert(arr);

//Відсортувати масив за зростанням.
arr.sort(function(a, b){
    return a - b;
});

alert(arr);

//Видалити елементи з масиву з 2 по 4 (включно!).
arr.splice(1, 3);

alert(arr);