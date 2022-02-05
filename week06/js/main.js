// Selectors //
const todoInput = document.querySelector('.todoInput');
const addBtn = document.querySelector('.add');
const todoList = document.querySelector('.todoList');
const filter = document.querySelector('select');
const remainTasks = document.querySelector('form p');

// Event Listeners //
document.addEventListener('DOMContentLoaded', getList);
addBtn.addEventListener('click', addItem);
todoList.addEventListener('click', deleteItem);
todoList.addEventListener('click', completeItem);
filter.addEventListener('click', filterTodo);

// Functions //

// Add to list
function addItem(event) {
    // Prevent browser refresh
    event.preventDefault();
    // Input if value length > 0
    if (todoInput.value.length > 0) {
        // Todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // Create input checkbox
        const todoCheckbox = document.createElement('input');
        todoCheckbox.setAttribute('type', 'checkbox');
        todoDiv.appendChild(todoCheckbox);
        // Create li
        const newTodo = document.createElement('li');
        newTodo.classList.add('todoItem');
        newTodo.innerText = todoInput.value;
        todoDiv.appendChild(newTodo);
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.setAttribute('title', 'Delete task');
        deleteBtn.innerHTML = '<i class="icon icon-trash"></i>';
        deleteBtn.classList.add("deleteBtn");
        todoDiv.appendChild(deleteBtn);
        // Append to list
        todoList.appendChild(todoDiv);
        // Add to localStorage
        saveLocalStorage(todoInput.value);
        // Clear input value
        todoInput.value = '';
    }
    // Check remaining tasks
    taskCount();
}

// Delete from list
function deleteItem(e) {
    const item = e.target;
    // Delete item
    if (item.classList[0] === "deleteBtn") {
        const removeItem = item.parentElement;
        // Animate
        removeItem.classList.add('fadeOut');
        removeStorageTrash(removeItem);
        removeItem.addEventListener('transitionend', function () {
            removeItem.remove();
            // Check remaining tasks
            taskCount();
        });
    }
}

// Mark complete (checked)
function completeItem(e) {
    const item = e.target;
    // Delete item
    if (item.getAttribute("type") === "checkbox") {
        const completedItem = item.nextSibling;
        completedItem.classList.toggle('done');
        // Check remaining tasks
        taskCount();
    }
}

// Filter list results
function filterTodo(e) {
    const filterOpt = todoList.querySelectorAll('div');
    filterOpt.forEach(function (filterOpt) {
        switch (e.target.value) {
            case "all":
                filterOpt.style.display = "flex";
                break;
            case "completed":
                if (filterOpt.querySelectorAll('li')[0].classList.contains('done')) {
                    filterOpt.style.display = "flex";
                } else {
                    filterOpt.style.display = "none";
                }
                break;
            case "incomplete":
                if (!(filterOpt.querySelectorAll('li')[0].classList.contains('done'))) {
                    filterOpt.style.display = "flex";
                } else {
                    filterOpt.style.display = "none";
                }
                break;
        }
    });
}

// Count remaining tasks
function taskCount() {
    const tasks = todoList.querySelectorAll('div li');
    let count = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (!(tasks[i].classList.contains('done'))) {
            count += 1;
        }
    }
    document.getElementById('results').innerHTML = `${count} | tasks left`;
}

// Save localStorage
function saveLocalStorage(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Keep stoage
function getList() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function (todo) {
        // Todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // Create input checkbox
        const todoCheckbox = document.createElement('input');
        todoCheckbox.setAttribute('type', 'checkbox');
        todoDiv.appendChild(todoCheckbox);
        // Create li
        const newTodo = document.createElement('li');
        newTodo.classList.add('todoItem');
        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo);
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.setAttribute('title', 'Delete task');
        deleteBtn.innerHTML = '<i class="icon icon-trash"></i>';
        deleteBtn.classList.add("deleteBtn");
        todoDiv.appendChild(deleteBtn);
        // Append to list
        todoList.appendChild(todoDiv);
        // Check remaining tasks
        taskCount();
    });
}

// Remove from storage
function removeStorageTrash(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    // Grab li innerTEXT
    const listItem = todo.children[1].innerText;
    // Delete from localStoage what listItem grabbed
    todos.splice(todos.indexOf(listItem), 1);
    // push back to localStoage
    localStorage.setItem('todos', JSON.stringify(todos));
}