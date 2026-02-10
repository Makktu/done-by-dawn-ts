const displayArea = document.getElementById('display') as HTMLElement;
const taskForm = document.getElementById('task-form') as HTMLFormElement;
const taskInput = document.getElementById('taskInput') as HTMLInputElement;

setupEventListeners();

const todos: Array<{ task: string; done: boolean }> = [
  { task: 'Wash dishes', done: false },
  { task: 'Clean room', done: false },
  { task: 'Write books', done: true },
];
let currentTasks: number = todos.length;

displayTasks(todos);

function displayTasks(todos: Array<{ task: string; done: boolean }>) {
  let displayContent: string = ``;
  let doneOrNot: string = '';

  todos.forEach((todo) => {
    if (todo) {
      doneOrNot = todo.done ? 'Yes' : 'No';
      displayContent += `<span id="boldtext">Task:</span> ${todo.task}<br /><span id="boldtext">Completed:</span> ${doneOrNot}<br />--------------------<br />`;
    }

    displayArea.innerHTML = displayContent;
  });
}

function setupEventListeners(): void {
  // * the overall form listener & logic
  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let newTask: string = taskInput.value; // ! 1st fix!

    if (currentTasks + 1 > 10) {
      alert('TASK LIMIT REACHED');
      return;
    }

    todos.push({
      task: newTask,
      done: false,
    });

    displayTasks(todos);

    taskInput.value = '';

    currentTasks += 1;
    console.log(currentTasks);
  });
}
