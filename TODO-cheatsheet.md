# Todo List – JavaScript Cheat Sheet

This cheat sheet covers all the main JavaScript functions and methods used in this project.  
Great for beginners reviewing DOM, events, and `localStorage`.

---

## DOM Selection

```js
const input = document.querySelector('.todo__input');
const button = document.querySelector('.todo__add-btn');
const list = document.querySelector('.todo__list');
```

##  Event Listeners

```
button.addEventListener('click', () => {
  // Add task
});

list.addEventListener('click', (e) => {
  // Toggle or delete task
});
```

## Create and Render Elements

```
function createTodoItem(text, completed = false) {
  const li = document.createElement('li');
  li.textContent = text;
  if (completed) li.classList.add('checked');

  const span = document.createElement('span');
  span.innerHTML = '\u00d7'; // Unicode "×"
  li.appendChild(span);

  return li;
}

function renderList() {
  list.innerHTML = '';
  tasks.forEach(({ text, completed }) => {
    const item = createTodoItem(text, completed);
    list.appendChild(item);
  });
}
```

## Array Operations

```
tasks.push({ text, completed: false });   // Add new task
tasks.splice(index, 1);                   // Remove task by index
```

## localStorage

### Save data to localStorage:
```
function saveData() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
```

### Load data from localStorage:

```
function loadData() {
  const stored = localStorage.getItem('tasks');
  if (stored) tasks = JSON.parse(stored);
}
```

##  Initialization

```
let tasks = [];
loadData();     // Load saved tasks on page load
renderList();   // Render tasks to the DOM
```

## Tip

Use this cheat sheet as a quick refresher when building simple JavaScript apps — especially when you want to practice localStorage, DOM manipulation, and user interactions.