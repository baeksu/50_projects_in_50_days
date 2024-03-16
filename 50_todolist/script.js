const form = document.querySelector("#form");
const input = document.querySelector("#input");
const todosUl = document.querySelector("#todos");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    let todoText = input.value;

    if (todoText) {
        const todoEl = document.createElement("li");
        todoEl.textContent = todoText;
        todosUl.appendChild(todoEl);
    }
}
