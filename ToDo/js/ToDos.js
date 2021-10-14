const toDoInput = document.getElementsByClassName('to-do-item');
var toDoList = document.querySelector('.to-do-list');
let todos = [];
var addButton = document.querySelector('.add-button');

addButton.addEventListener('click', function() {
    var item = toDoInput[0].value;
    if (item !== '') {
        const todo = {
            id: Date.now(),
            content: item,
            completed: false
        };

        todos.push(todo);
        renderTodos(todos);

        toDoInput[0].value = '';
    }
})

function renderTodos(todos) {
    toDoList.innerHTML = '';
    todos.forEach(item => {
        const checked = item.completed ? 'checked' : null;
        const li = document.createElement('li');

        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);

        if (item.completed === true) {
            li.classList.add('checked');
        }

        li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.content}
      <button class="close">X</button>`;
      toDoList.append(li);
    });
}

function toggle(id) {
    todos.forEach(item => {
        if (item.id == id) {
            item.completed = !item.completed;
        }
    })

    addToLocalStorage(todos);
}

function deleteId(id) {
    todos.splice(todos.findIndex(x => x.id === parseInt(id)), 1); 
    addToLocalStorage(todos);
}

getFromLocalStorage();

toDoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        // e.target.lastChild.classList.toggle('close-check');
        e.target.classList.toggle('checked');
        toggle(e.target.getAttribute('data-key'));
    }

    if (e.target.type === "checkbox") {
        e.target.classList.toggle('checked');
        toggle(e.target.parentElement.getAttribute('data-key'));
    }

    if (e.target.classList.contains('close')) {
        deleteId(e.target.parentElement.getAttribute('data-key'));
    }
});

function addToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
}

function getFromLocalStorage() {
    const ref = localStorage.getItem('todos');

    if (ref) {
        todos = JSON.parse(ref);
        renderTodos(todos);
    }
}