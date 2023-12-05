const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

const displayTodoList = () => {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    todoList.forEach((todoItem, i) => {
        const li = document.createElement('li');
        li.textContent = todoItem.todoText;
        li.className = todoItem.completed ? 'completed' : '';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            deleteTodoItem(i);
        });
        li.appendChild(deleteButton);

        li.addEventListener('click', () => toggleCompleted(i));
        li.addEventListener('dblclick', () => editTodoItem(i));
        list.appendChild(li);
    });
}

const addTodoItem = () => {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();
    if(todoText === '') {
        alert('Будь ласка, введіть завдання!');
        return;
    }

    todoList.push({
        todoText: todoText,
        completed: false
    });

    input.value = '';
    displayTodoList();
}

const toggleCompleted = (index) => {
    if(index < todoList.length) {
        todoList[index].completed = !todoList[index].completed;
        displayTodoList();
    }
}

const editTodoItem = (index) => {
    const newTodoText = prompt('Введіть нове завдання', todoList[index].todoText);
    if(newTodoText !== null && newTodoText.trim() !== '') {
        todoList[index].todoText = newTodoText;
        displayTodoList();
    }
}

const deleteTodoItem = (index) => {
    if(index < todoList.length) {
        todoList.splice(index, 1);
        displayTodoList();
    }
}

document.getElementById('addTodoButton').addEventListener('click', addTodoItem);

window.addEventListener('beforeunload', () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
});

displayTodoList();