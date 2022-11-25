const todos = JSON.parse(localStorage.getItem("todos")) || [];

const render = () => {
    if(todos.length === 0){
        const nota  = "No hay tareas pendientes"
        const notaPendientes = document.getElementById("pendientes");
        pendientes.innerHTML = nota;
    }else {
        const notaPendientes = document.getElementById("pendientes");
        pendientes.innerHTML = "";
        const todoList = document.getElementById("todo-list");
        const todosTemplate = todos.map(t => "<li>" + t + "</li>");
        todoList.innerHTML = todosTemplate.join("");
        const elementos = document.querySelectorAll("#todo-list li")
        elementos.forEach((elemento, i) => {
            elemento.addEventListener("click", () => {
                elemento.parentNode.removeChild(elemento);
                todos.splice(i, 1)
                actualizaTodos(todos)
                render()
            })
        })
    }
}

const actualizaTodos = (todos) => {
    const todoStrings = JSON.stringify(todos);
    localStorage.setItem("todos", todoStrings);
}

render();
const form = document.getElementById("todo-form");
form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    const todoText = todo.value;
    todo.value = "";
    todos.push(todoText);
    actualizaTodos(todos)
    render()
}

