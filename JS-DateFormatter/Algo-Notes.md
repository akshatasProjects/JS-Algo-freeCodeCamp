# In this project, you will learn about the JavaScript Date object by building a date formatter.

## Algorithm / Steps

1. Get the "current-date" element which is a p tag.
2. Get the "date-options" element which is a select dropdown.
3. Create a new Date object using constructor method store it in a variable.

4. Using getDate() get the day of the month assign it to a variable.
5. Using getMonth() get the month and add 1 to get it exact month.
6. Get the year using the getFullYear().
7. Using the getHours() get hours and assign it to a variable.
8. Using getMinutes() get the minutes.
9. create a variable formattedDate assign empty template literal.
10. Inside template literal add embedded expression that contains the day variable date-month-year.
11. Use the textContent property on currentDateParagraph to set its text content to the value of the formattedDate variable

12. Attach the addEventListener method to the dateOptionsSelectElement which is a dropdown. The first argument of the event listener should be the string "change" and the second argument should be an empty arrow function.

13. Using a Switch statement get the user's value and display the date in their chosen date format, When a user makes a selection from the dropdown menu.

- dateOptionsSelectElement.value as a switch expression.

## Notes:

1. A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator.
   For example, you can use the Date() constructor with the new operator to create a new Date object that returns a string with the current date and time

2. The .getDate() method, which returns a number between 1 and 31 that represents the day of the month for that date.

3. The .getMonth() method returns a number between 0 and 11. This represents the month for the date provided, where 0 is January and 11 is December. Because the number this method returns is zero-based, you need to add 1 to it to get the expected month number.

4. The .getFullYear() method returns a number which represents the year for the provided date.

5. The .getHours() method returns a number between 0 and 23. This represents the hour for the provided date, where 0 is midnight and 23 is 11 p.m.
6. The .getMinutes() method returns a number between 0 and 59 which represents the minutes for the provided date.

7. In JavaScript, the change event is used to detect when the value of an HTML element has changed.
   element.addEventListener("change", () => {
   });

8. A switch statement is used to compare an expression against multiple possible values and execute different code blocks based on the match. It's commonly used for branching logic.
