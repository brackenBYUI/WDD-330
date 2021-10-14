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


var toDoList = document.querySelector('.to-do-list');
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
      ${item.name}
      <button class="close">X</button>`;
      toDoList.append(li);
    });
}
