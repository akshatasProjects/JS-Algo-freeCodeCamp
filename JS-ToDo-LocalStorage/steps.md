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

13. Now that you have obtained the values from the input fields and generated an id, you want to add them to your taskData array to keep track of each task. However, you should only do this if the task is new. If the task already exists, you will set it up for editing. This is why you have the dataArrIndex variable, which provides the index of each task.

Create an if statement with the condition dataArrIndex === -1. Within the if statement, use the unshift() method to add the taskObj object to the beginning of the taskData array.

14. Using arrow syntax complete the forEach callback function. Inside the callback function body use an addition assignment to set the innerHTML of tasksContainer to empty backticks.

15. Create a div element with the class of task. Utilize template strings to set the id attribute of the div to the id you destructured from the task data.

16. To allow for task management, you need to include both a delete and an edit button for each task.

Create two button elements with the type attribute set to button and the class attribute set to btn. Set the text of the first button to Edit and the text of the second button to Delete.

17. Inside the reset function, set each value of titleInput, dateInput, descriptionInput to an empty string.

Also, use classList to toggle the class hidden on the taskForm and set currentTask to an empty object. That's because at this point, currentTask will be filled with the task the user might have added.

18. You should display the Cancel and Discard buttons to the user only if there is some text present in the input fields.

To begin, within the closeTaskFormBtn event listener, create a formInputsContainValues variable to check if there is a value in the titleInput field or the dateInput field or the descriptionInput field.

19. Create an if statement to check if formInputsContainValues is true. If formInputsContainValues is true, indicating that there are changes, use the showModal() method on confirmCloseDialog. Otherwise, if there are no changes, call the reset() function to clear the input fields and hide the form modal.

20. You can enhance code readability and maintainability by refactoring the submit event listener into two separate functions. The first function can be used to add the input values to taskData, while the second function can be responsible for adding the tasks to the DOM.

Use arrow syntax to create an addOrUpdateTask function. Then move the dataArrIndex variable, the taskObj object, and the if statement into the addOrUpdateTask function.

21. Now add formInputValuesUpdated as the second mandatory condition in the if statement using the AND operator.

This way, the Cancel and Discard buttons in the modal won't be displayed to the user if they haven't made any changes to the input fields while attempting to edit a task.

22. localStorage offers methods for saving, retrieving, and deleting items. The items you save can be of any JavaScript data type.

For instance, the setItem() method is used to save an item, and the getItem() method retrieves the item. To delete a specific item, you can utilize the removeItem() method, or if you want to delete all items in the storage, you can use clear().

23. A myTaskArr array has been provided for you. Use the setItem() method to save it with a key of data.

After that, open your browser console and go to the Applications tab, select Local Storage, and the freeCodeCamp domain you see.

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

- unshift() is an array method that is used to add one or more elements to the beginning of an array.

- array.forEach(function(element, index, array))
  When to Use forEach()
  ✅ When you need to execute a function on each array element
  ✅ When you don’t need to modify the original array
  ✅ When you don’t need to return a new array (unlike map())
  ✅ When working with side effects like logging, updating the DOM, or modifying external variables

When NOT to Use forEach()
❌ If you need to return a modified array – Use .map() instead
❌ If you need to stop or break the loop early – Use for or for...of instead
❌ If you need to work asynchronously – Use for...of with async/await instead

- localStorage offers methods for saving, retrieving, and deleting items. The items you save can be of any JavaScript data type.

For instance, the setItem() method is used to save an item, and the getItem() method retrieves the item. To delete a specific item, you can utilize the removeItem() method, or if you want to delete all items in the storage, you can use clear().
localStorage.setItem("key", value);
