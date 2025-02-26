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

7. Add an event listener to the cancelBtn element and pass in a click event for the first argument and a callback function for the second argument.
   For the callback function, call the close() method on the confirmCloseDialog element.

8. Add a click event listener to discardBtn, then use the close() method on the confirmCloseDialog variable. Also, use classList to toggle the class hidden on taskForm so the form modal will close too.

9. To start, add a submit event listener to your taskForm element and pass in e as the parameter of your arrow function. Inside the curly braces, use the preventDefault() method to stop the browser from refreshing the page after submitting the form.

10. Use const to declare a variable called dataArrIndex and assign it the value of taskData.findIndex(). For the findIndex() method, pass in an arrow function with item as the parameter.

Within the arrow function, check if the id property of item is strictly equal to the id property of currentTask.

11. To make the id more unique, add another hyphen and use Date.now().
    Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC

12. Now it is time to add the remaining properties to the taskObj object.
    Retrieve the values from the titleInput, dateInput, and descriptionInput fields, and then save them in the properties title, date, and description of the taskObj object.

Add a new task and open up the console to see the taskObj object with the new properties.

### Notes

- What is localStorage?

  LocalStorage is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.

- classList has 3 properties - classList.add(), classList.remove() and classList.toggle()

- In HTML, the <dialog> element represents a modal or non-modal dialog box. It is used to create pop-ups, confirmation messages, or custom modals without needing external JavaScript libraries.
  By default, a <dialog> element is hidden.
  To display it, use the .showModal() or .show() method.
  To hide it, use the .close() method or let the user close it.

- A modal is an element that prevents all interaction with elements outside it until the modal has been dismissed.

- The HTML dialog element has a close() method that can be used to close a modal dialog box on a web page.

- The findIndex() array method finds and returns the index of the first element in an array that meets the criteria specified by a provided testing callback function. If no such element is found, the method returns -1. The callback should return a truthy value to indicate a matching element has been found, and a falsy value otherwise.

- To make the id more unique, add another hyphen and use Date.now().
  Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
