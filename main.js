const todoInput = document.querySelector('.todo__input');
const addButton = document.querySelector('.todo__add-btn');
const todoList = document.querySelector('.todo__list');

addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        todoItem.appendChild(span);
        todoInput.value = '';
    }
});

todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
});