const add = document.querySelector(".add");
const button_for_add = document.querySelector(".button_for_add");
const list_of_todos = document.querySelector(".list_of_todos");

button_for_add.addEventListener("click", inserttodos);
list_of_todos.addEventListener("click", delete_todos);
document.addEventListener("DOMContentLoaded", getLocalTodos);
filterOption.addEventListener("change", filterTodo);


function inserttodos(event){
    event.preventDefault();
    const first= document.createElement("div");
    first.classList.add('todo');
    const adding=document.createElement("li");
    adding.innerText=add.value;
    adding.classList.add('items');
    first.appendChild(adding);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = "&#x2713";
    completedButton.classList.add("complete-btn");
    first.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "&#10006";
    trashButton.classList.add("trash-btn");
    first.appendChild(trashButton);
   
    list_of_todos.append(first);
    add.value = "";

    
}
function delete_todos(e) {
    const item = e.target;

    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("slide");

        remove_local_todos(todo);
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}



















































// function saveLocalTodos(todo) {
//     let todos;
//     if(localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }
// function getLocalTodos() {
//     let todos;
//     if(localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.forEach(function(todo) {
//         const first= document.createElement("div");
//         first.classList.add('todo');
//         const adding=document.createElement("li");
//         adding.innerText=add.value;
//         adding.classList.add('items');
//         first.appendChild(adding);
        
//         const completedButton = document.createElement("button");
//         completedButton.innerHTML = "&#x2713";
//         completedButton.classList.add("complete-btn");
//         first.appendChild(completedButton);
    
//         const trashButton = document.createElement("button");
//         trashButton.innerHTML = "&#10006";
//         trashButton.classList.add("trash-btn");
//         first.appendChild(trashButton);
       
//         list_of_todos.append(first);
//     });
// }




























// function remove_local_todos(todo) {
//     let todos;
//     if(localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     const todoIndex = todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoIndex), 1);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }