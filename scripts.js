const button = document.querySelector('.button-task');
const input = document.querySelector('.input-task');

function GetInputValue(){
  console.log(input.value)
}

button.addEventListener('click', GetInputValue)