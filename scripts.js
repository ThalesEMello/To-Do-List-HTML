const button = document.querySelector(".button-task");
const input = document.querySelector(".input-task");

let MyItensList = [];

function AddNewTask() {
  MyItensList.push(input.value);

  console.log(MyItensList);
}

function ShowTasks() {
  let NewLi = "";
  MyItensList.forEach((Task) => {
    NewLi = `
    <li class="task">
      <img src="img/check.png" alt="check-mark" />
      <p>Concluir o JS do Task Manager</p>
      <img src="img/delete-button.png" alt="trash" />
    </li>
    `;
  });
}

button.addEventListener("click", AddNewTask);
