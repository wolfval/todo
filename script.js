const todosNode = document.querySelector('.todos');
const inputNode = document.querySelector('.todo-input');
const btnNode = document.querySelector('.add-btn');

let todos = [];

function addTodo(text) {
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`
    };

    todos.push(todo);

    inputNode.value = '';
}

function deleteTodo(id) {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.done = true;
        }
    })
}

function render() {
    let html = '';

    todos.forEach(todo => {
        if (todo.done) {
            return;
        }; 

        html += `
            <div class="todo">
                <input type="checkbox" id="check" class="check">
                <span id="text">${todo.text}</span>
                <button data-id="${todo.id}" class="delete"></button>
            </div>
        `;
    });

    todosNode.innerHTML = html;
} 

btnNode.addEventListener('click', () => {
    const text = inputNode.value;

    if (text.length == 0) {
        alert('Please, enter a task');
    } else {
        addTodo(text);
        render();
    }
});

todosNode.addEventListener('click', event => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const id = event.target.dataset.id;

    deleteTodo(id);

    render();
});

render();