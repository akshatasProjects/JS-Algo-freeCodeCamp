/*id of <form> - task-form
  id of <dialogue> - confirm-close-dialog
  button"Add New Task" id - open-task-form-btn 

  close button inside form - close-task-form-btn
  insied task-form-footer add task button id - add-or-update-task-btn
  cancel button inside dialgue - cancel-btn

  discard button inside dialogue - discard-btn
  div at the end of form - tasks-container
  input text inside form - title-input

  input data - date-input 
  textArea - description-input 
  */

const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

/*--------------------Code Starts from here-------------------------*/
const taskData = [];
let currentTask = {};

// Reset Function
const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
};

openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.show();
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value;

  if (formInputsContainValues) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

// Getting data from the form inputs

const addOrUpdateTask = () => {
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split("").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  }
  updateTaskContainer();
  reset();
};

const updateTaskContainer = () => {
  tasksContainer = "";
  taskData.forEach(({ id, title, date, description }) => {
    ` <div class='task' id=${id}>
        <p><strong>Title:</strong>${title}</p>
        <p><strong>Date:</strong>${date}</p>
        <p><strong>Description:</strong>${description}</p>
      </div>
    `;
  });
};

taskForm.addEventListener("submit", (e) => {
  addOrUpdateTask();
});
