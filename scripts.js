const button = document.querySelector(".button-task");
const input = document.querySelector(".input-task");

let MyItensList = [];

function AddNewTask() {
  MyItensList.push(input.value);

  console.log(MyItensList);
}

button.addEventListener("click", AddNewTask);
