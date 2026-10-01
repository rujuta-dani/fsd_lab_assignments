const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    li.className = "task";

    const span = document.createElement("span");

    span.textContent = taskText;

    const buttonContainer = document.createElement("div");

    buttonContainer.className = "task-buttons";

    const completeButton = document.createElement("button");

    completeButton.textContent = "Complete";

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    completeButton.addEventListener("click", function () {

        li.classList.toggle("completed");

    });

    deleteButton.addEventListener("click", function () {

        li.remove();

    });

    buttonContainer.appendChild(completeButton);

    buttonContainer.appendChild(deleteButton);

    li.appendChild(span);

    li.appendChild(buttonContainer);

    taskList.appendChild(li);

    taskInput.value = "";

});