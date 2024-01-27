let taskInput = document.getElementById("taskInput");
let taskList = document.querySelector(".task-list");

function addTask() {
    if (taskInput.value === "") {
        alert("Please Enter a Task");
    } else {
        let newTask = document.createElement("ul");
        newTask.innerHTML = `${taskInput.value} <i class="fas fa-trash"></i>`;
        taskList.appendChild(newTask);
        taskInput.value = "";
        newTask.querySelector("i").addEventListener("click", removeTask);
    }
}

function removeTask() {
    this.parentNode.remove();
}
