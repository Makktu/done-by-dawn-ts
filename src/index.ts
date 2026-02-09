const displayArea = document.getElementById('display') as HTMLElement;
const inputBox = document.getElementById('input-box') as HTMLElement;
const submitBtn = document.getElementById('submit-btn') as HTMLElement;

setupEventListeners();

let todos = [
  {
    task: 'Wash dishes',
    done: false,
  },
  {
    task: 'Clean room',
    done: false,
  },
  {
    task: 'Write books',
    done: true,
  },
];

let displayContent: string = ``;
let doneOrNot: string = '';

todos.forEach((todo) => {
  if (todo) {
    doneOrNot = todo.done ? 'Yes' : 'No';
    displayContent += `<span id="boldtext">Task:</span> ${todo.task}<br /><span id="boldtext">Completed:</span> ${doneOrNot}<br />--------------------<br />`;
  }
});

displayArea.innerHTML = displayContent;

function setupEventListeners(): void {
  submitBtn.addEventListener('click', () => {
    console.log('clicked');
    let inputValue: string = inputBox.textContent; // ! 1st fix!
    console.log(inputValue);
  });
}
