# Project To Do List Using LocalStorage

In this project, you will learn how localStorage works in JavaScript by building a Todo app.

1. Begin by accessing the task-form, confirm-close-dialog, and open-task-form-btn elements with the getElementById() method. Save them in the variables taskForm, confirmCloseDialog, and openTaskFormBtn.

2. You need to access more elements with the getElementById() method. This time you need the close-task-form-btn, add-or-update-task-btn, and cancel-btn elements. Save them in the variables closeTaskFormBtn, addOrUpdateTaskBtn, and cancelBtn.

3. Next, access the discard-btn, tasks-container, and title-input elements using the getElementById() method. Save them in variables named discardBtn, tasksContainer, and titleInput, respectively.

4. The last set of elements you need to get from the HTML file are the date-input and description-input elements. Save them in the variables dateInput and descriptionInput respectively.

5. Create a taskData constant and set it to an empty array. This array will store all the tasks along with their associated data, including title, due date, and description. This storage will enable you to keep track of tasks, display them on the page, and save them to localStorage.

Use let to create a currentTask variable and set it to an empty object. This variable will be used to track the state when editing and discarding tasks.

6. Add an event listener to the openTaskFormBtn element and pass in a "click" event for the first argument and an anonymous callback function for the second argument.

Inside the callback function, use the classList.toggle() method to toggle the "hidden" class on the taskForm element.

### Notes

- What is localStorage?

  LocalStorage is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.

- classList has 3 properties - classList.add(), classList.remove() and classList.toggle()

- In HTML, the <dialog> element represents a modal or non-modal dialog box. It is used to create pop-ups, confirmation messages, or custom modals without needing external JavaScript libraries.
  By default, a <dialog> element is hidden.
  To display it, use the .showModal() or .show() method.
  To hide it, use the .close() method or let the user close it.

- A modal is an element that prevents all interaction with elements outside it until the modal has been dismissed.
