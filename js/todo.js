const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODO_KEY = ("todo");

function saveToDos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function delTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(event => event.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}


function paintToDo(saveValue){
    const li = document.createElement("li");
    li.id = saveValue.id;
    const span = document.createElement("span");
    span.innerText = saveValue.text;
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click" , delTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function toDoCtl(event) {
    event.preventDefault();
    const saveValue = toDoInput.value;
    toDoInput.value = "";
    const newTodoObject = {
        text:saveValue,
        id:Date.now(),
    };
    toDos.push(newTodoObject);
    paintToDo(newTodoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", toDoCtl);





const getTodo = (localStorage.getItem(TODO_KEY));
if (getTodo !== null) {
    const parseTodo = JSON.parse(getTodo);
    toDos = parseTodo;
    parseTodo.forEach(paintToDo);
}