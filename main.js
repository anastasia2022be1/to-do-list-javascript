const todoInput = document.querySelector('.todo__input');
const addButton = document.querySelector('.todo__add-btn');
const todoList = document.querySelector('.todo__list');

let tasks = [];

function createTodoItem(text, completed = false) {
    const todoItem = document.createElement('li');
    todoItem.textContent = text;
    if (completed) todoItem.classList.add('checked');

    const span = document.createElement('span');
    span.innerHTML = '\u00d7';
    todoItem.appendChild(span);

    return todoItem;
}

addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        tasks.push({ text: todoText, completed: false });
        saveData();
        renderList();
        todoInput.value = '';
    }
});

todoList.addEventListener('click', (e) => {
    const items = Array.from(todoList.children);
    const index = items.indexOf(
        e.target.tagName === 'SPAN' ? e.target.parentElement : e.target
    );

    if (e.target.tagName === 'LI') {
        tasks[index].completed = !tasks[index].completed;
    } else if (e.target.tagName === 'SPAN') {
        tasks.splice(index, 1);
    }

    saveData();
    renderList();
});

function saveData() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadData() {
    const stored = localStorage.getItem('tasks');
    if (stored) tasks = JSON.parse(stored);
}

function renderList() {
    todoList.innerHTML = '';
    tasks.forEach(({ text, completed }) => {
        const todoItem = createTodoItem(text, completed);
        todoList.appendChild(todoItem);
    });
}

loadData();
renderList();
