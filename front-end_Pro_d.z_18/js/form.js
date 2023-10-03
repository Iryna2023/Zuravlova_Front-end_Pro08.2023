const table = document.createElement('table');
let counter = 1;

for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        let cell = document.createElement('td');
        cell.textContent = counter++;
        row.appendChild(cell);
    }

    table.appendChild(row);
}

document.getElementById('myElement').appendChild(table);

let tableText = '';
for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++)
        tableText += table.rows[i].cells[j].textContent + ' ';
    tableText += '\n';
}

console.log(tableText);