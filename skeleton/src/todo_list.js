
let todos = [];
let todoList = document.querySelector(".todos");
if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
  populateList();
}

let todoForm = document.querySelector(".add-todo-form");
let submit = document.querySelector("#submit");


todoForm.addEventListener("submit", function(event){
  event.preventDefault();
  let input = document.getElementsByName("add-todo");
  let inputVal = input[0].value;
  let todoObj = {};
  todoObj[inputVal] = false;
  todos.push(todoObj);
  if (todos.length !== 1) {
    addOneTodo(todoObj);
  }else{
    populateList();
  }
  this.reset();

});

function populateList() {
  todos.forEach(ele => {
    let label = document.createElement("label");
    label.innerHTML = (Object.keys(ele)[0]);
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    li.appendChild(input);
    label.appendChild(li);
    todoList.appendChild(label);
  });
  let json = JSON.stringify(todos);
  localStorage.setItem("todos", json);
}

function addOneTodo(latestTodo) {
    let label = document.createElement("label");
    label.innerHTML = (Object.keys(latestTodo)[0]);
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    li.appendChild(input);
    label.appendChild(li);
    todoList.appendChild(label);
    let json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
}

let checkBoxes = document.querySelector(".todos");

checkBoxes.addEventListener("click", function(event){
  event.target.setAttribute('data-checked','true');
  let json = JSON.stringify(todos);
  localStorage.setItem("todos", json);
});
