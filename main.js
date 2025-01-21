let inputField = document.getElementById("input--field");
let newTask = document.getElementById("new__task");
let listTask = document.getElementById("list--task");

function createTask(){
    if (inputField.value === "") {
        alert("Enter something");
    } 
    else {
    let newItem = document.createElement('li');
    newItem.innerHTML = inputField.value;
    listTask.appendChild(newItem);

    let span = document.createElement('span');
    span.innerHTML = "\u00D7";
    newItem.appendChild(span);
    }
    
    inputField.value = ""
    saveTask();
}

listTask.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    } 
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
})

function saveTask(){
    localStorage.setItem("data", listTask.innerHTML);
}

function showTask(){
    listTask.innerHTML = localStorage.getItem("data");
}
showTask();