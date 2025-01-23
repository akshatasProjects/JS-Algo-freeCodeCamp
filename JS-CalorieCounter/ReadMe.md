# Calorie counter form Project

Step 1

In this project, you'll learn to create a calorie counter form that enables users to input their daily calorie budget and the calorie counts of various meals. The form will then calculate and display whether the user is in a calorie deficit or surplus

You have been provided with boilerplate CSS and HTML. However, you need to build your calorie counter form.

---

- Feel free to explore the HTML and CSS, then add a form element and give it an id set to calorie-counter.

Step 2

In your form, users will be able to input a number which represents their daily calorie budget.

---

- Create a label element, give it a for attribute set to budget and the text Budget, then create an input element with the id set to budget.

Step 3

- Your input element needs some additional attributes. Give it a type set to number to only allow numeric inputs, a min attribute set to 0 to only allow positive numbers, and a placeholder set to Daily calorie budget.

- Finally, mark the input element as required.

Step 4

In your form, users should have the capability to add various meal types along with their calorie counts.

---

create a fieldset element with the id set to "breakfast".
Within that element, create a legend with the text Breakfast, and an empty div with the class set to "input-container".

Step 5

Next, create a fieldset element with the id set to "lunch".

Within that element, create a legend element with the text Lunch, and an empty div with the class set to input-container.

---

Step 6

Continuing the pattern, create a fieldset for dinner with the same nested elements.

---

Step 8

When users want to select a meal type to input their calorie counts, they should be presented with a dropdown menu and a button to add the meal type

- Start by creating a div element and assign it a class attribute with the value controls. Then, nest a span element inside this div.

---

Step 9

In your span element, create a label element for an entry-dropdown and give it the text Add food or exercise:. Then create a select element with the id set to entry-dropdown and a name set to options. Below that, add a button element with the id set to add-entry and the text Add Entry.

Give your button element a type attribute set to button to prevent automatic form submission.

---

Step 10

Your select menu needs options for each of the food and exercise fieldset elements you created in the previous steps. Use the option element to create a new option for each fieldset. The value attribute of each option should be the id of the fieldset, and the text of each option should be the text of the legend.

Set the Breakfast option as the selected option.

---

Step 11

Create another div element. Within it, nest a button to submit the form. This button should have the text Calculate Remaining Calories.

Then add a button with the id set to clear to clear the form (don't forget to give it a type attribute that prevents it from submitting the form). This button needs the text Clear.

---

Step 12

Your form needs somewhere to display the results. Add an empty div element and give it an id of output and the class values of output and hide.

---

Step 14

It is time to start writing the script that makes your form work.

To access an HTML element with a given id name, you can use the "getElementById()" method.

- Begin by getting the form element (using the id) and storing it in a variable called calorieCounter.

---

Step 15
Get your #budget element and assign it to budgetNumberInput, and your #entry-dropdown element and assign it to entryDropdown.

---

Step 16

Following the same pattern, assign your #add-entry element to addEntryButton, your #clear element to clearButton, and your #output element to output.

---

Step 17

In programming, prefixing a variable with is or has is a common practice to signify that the variable represents a boolean value.

- Declare a variable named isError using let and initialize it with false, allowing for its reassignment later.

Later on in the project, you will update the value of isError if the user provides an invalid input.

---

Step 18

When the user inputs their daily calorie budget, the input field will only accept numerical values. However, if a number is entered with a + or - sign, you'll need to remove those characters.

- Start by declaring a cleanInputString function that takes a str parameter.

- NOTE: Values from an HTML input field are received as strings in JavaScript. You'll need to convert these strings into numbers before performing any calculations. Converting string values into numbers will be covered in a future step.

---

Step 19

To match specific characters in a string, you can use Regular Expressions or "regex" for short.

- Regex in JavaScript is indicated by a pattern wrapped in forward slashes. The following example will match the string literal "hello":

      const regex = /hello/;

- Declare a regex variable and assign it the value from the example above. In future steps, you will update this regex pattern to match specific characters needed for the calorie counter.

---

Step 20

The current pattern will match the exact text "hello", which is not the desired behavior. Instead, you want to search for +, -, or spaces. Replace the pattern in your regex variable with \+- to match plus and minus characters.

- Note that you need to use the backslash \ character to escape the + symbol because it has a special meaning in regular expressions.

---

Step 21

In regex, shorthand character classes allow you to match specific characters without having to write those characters in your pattern. Shorthand character classes are preceded with a backslash (\).

- The character class \s will match any whitespace character. Add this to your regex pattern. regex= /\+-\s/

Step 22

Your current pattern won't work just yet. /+-\s/ looks for +, -, and a space in order. This would match +- hello but would not match +hello.

To tell the pattern to match each of these characters individually, you need to turn them into a character class.

      - This is done by wrapping the characters you want to match in brackets. For example, this pattern will match the characters h, e, l, or o:
      const regex = /[helo]/;

- const regex = /[+-\s]/;

Step 23

Regex can also take specific flags to alter the pattern matching behavior. Flags are added after the closing /

- The g flag, which stands for "global", will tell the pattern to continue looking after it has found a match.

            const helloRegex = /hello/g;

- Add the g flag to your regex pattern.

Step 24

JavaScript provides a .replace() method that enables you to replace characters in a string with another string. This method accepts two arguments. The first argument is the character sequence to be replaced, which can be either a string or a regex pattern. The second argument is the string that replaces the matched sequence.

- Since strings are immutable, the replace method returns a new string with the replaced characters.

- In this example, the replace method is used to replace all instances of the letter l with the number 1 in the string hello.
  "hello".replace(/l/g, "1");

- Use your regex to replace all instances of +, -, and a space in str with an empty string. Return this value.

Step 25

Now it is time to test out your cleanInputString function.

Inside your cleanInputString function, add a console.log() statement with two arguments. The first argument should be the string "original string: " and the second argument should be the str parameter.

Step 28
In HTML, number inputs allow for exponential notation (such as 1e10). You need to filter those out.

Start by creating a function called isInvalidInput – it should take a single str parameter.

Step 30
The e in a number input can also be an uppercase E. Regex has a flag for this, however – the i flag, which stands for "insensitive".

Step 33
There is a shorthand character class to match any digit: \d. Replace your [0-9] character classes with this shorthand.

Step 34
Strings have a .match() method, which takes a regex argument. .match() will return an array of match results – containing either the first match, or all matches if the global flag is used.

- Return the result of calling the .match() method on str and passing your regex variable as the argument. You'll use this match result later on.

Step 38
Now you need to retrieve the value of entryDropdown.value to get the currently selected option from the dropdown.

Step 39
Now that you have finished testing the value of entryDropdown.value, you can remove the console.log statement.

Your next step is to allow users to add entries to the calorie counter. Declare an empty function addEntry. This function should not take any parameters.

Step 40
You'll need to know which category the entry goes in. Thankfully, you added a dropdown for the user to select a category.

Remember that you queried that dropdown earlier in your JavaScript and assigned it to the entryDropdown variable. You can use the value property to get the value of the selected option.

Step 44
You will want to number the entries a user adds. To get all of the number inputs, you can use the querySelectorAll() method.

The querySelectorAll() method returns a NodeList of all the elements that match the selector. A NodeList is an array-like object, so you can access the elements using bracket notation.

- Declare an entryNumber variable and give it the value of targetInputContainer.querySelectorAll(). You do not need to pass an argument to the query selector yet.

Step 45
Each entry will have a text input for the entry's name, and a number input for the calories. To get a count of the number of entries, you can query by text inputs.

Pass the string input[type="text"] to the querySelectorAll() method. Remember that if you use single quotes for your string, you must also use double quotes within it (or vice-versa).

### This will return a NodeList of all the text inputs in the form. You can then access the length property of the NodeList to get the number of entries. Do this on the same line.

Step 47
Inside your template literal, create a label element and give it the text Entry # Name. Using your template literal syntax, replace # with the value of entryNumber.

Step 49
After your label element, and on a new line in your template string, create an input element. Give it a type attribute set to text, a placeholder attribute set to Name, and an id attribute that matches the for attribute of your label element.

Step 50
Create another label element (on a new line) at the end of your HTMLString. This label should have the text Entry # Calories, using your template literal syntax to replace # with the value of entryNumber, and the for attribute set to X-#-calories, where X is the value of entryDropdown and # is the value of entryNumber.

Step 51
Finally, on a new line after your second label, create another input element. Give this one a type attribute set to number, a min attribute set to 0 (to ensure negative calories cannot be added), a placeholder attribute set to Calories, and an id attribute that matches the for attribute of your second label element.

Step 53
In the Role Playing Game project, you learned how to set a button's behavior by editing its onclick property. You can also edit an element's behavior by adding an event listener.

Step 54
Try adding a couple of entries to the Breakfast category, and you may notice some bugs! The first thing we need to fix is the entry counts – the first entry should have a count of 1, not 0.

Step 56
The insertAdjacentHtml method takes two arguments. The first argument is a string that specifies the position of the inserted element. The second argument is a string containing the HTML to be inserted.

Step 57
Great! Now you can add entries without losing your previous inputs.

Your next step is to write a function that will get the calorie counts from the user's entries.

Declare a getCaloriesFromInputs function, and give it a parameter called list.

Step 58
In your new function, declare a calories variable and assign it the value 0. Use let to declare it, since you will be reassigning it later.

Step 59
The list parameter is going to be the result of a query selector, which will return a NodeList. A NodeList is a list of elements like an array. It contains the elements that match the query selector. You will need to loop through these elements in the list.

In previous steps, you learned how to loop through an array using a for loop. You can also use a for...of loop to loop through an array and a NodeList.

A for...of loop is used to iterate over elements in an iterable object like an array. The variable declared in the loop represents the current element being iterated over.

Step 60
The NodeList values you will pass to list will consist of input elements. So you will want to look at the value attribute of each element.

Assign item.value to a const variable called currVal.

## Important to Note:

- The character class \s will match any whitespace character. Add this to your regex pattern. regex= /\+-\s/

- To tell the pattern to match each of these characters individually, you need to turn them into a character class thats done by wrapping the character in brackets const regex = /[helo]/;

- The g flag, which stands for "global", will tell the pattern to continue looking after it has found a match

- JavaScript provides a .replace() method that enables you to replace characters in a string with another string. This method accepts two arguments. The first argument is the character sequence to be replaced, which can be either a string or a regex pattern. The second argument is the string that replaces the matched sequence.
  Since strings are immutable, the replace method returns a new string with the replaced characters.

- In HTML, number inputs allow for exponential notation (such as 1e10). You need to filter those out.

- The e in a number input can also be an uppercase E. Regex has a flag for this, however – the i flag, which stands for "insensitive".

- Number inputs only allow the e to occur between two digits. To match any number, you can use the character class [0-9]. This will match any digit between 0 and 9.

- There is a shorthand character class to match any digit: \d. Replace your [0-9] character classes with this shorthand.

- The + modifier in a regex allows you to match a pattern that occurs one or more times.

- Strings have a .match() method, which takes a regex argument. .match() will return an array of match results – containing either the first match, or all matches if the global flag is used.

- The match method returns an array with any matches found in the string. ex: [ '1e3', index: 0, input: '1e3', groups: undefined ]
- The match method returns null when no match is found.

- null in JavaScript is a special primitive that represents the intentional absence of a value. In a boolean context, null is considered falsy which evaluates to false in a conditional statement.

- The querySelectorAll() method returns a NodeList of all the elements that match the selector. A NodeList is an array-like object, so you can access the elements using bracket notation.

- The addEventListener method takes two arguments. The first is the event to listen to. (Ex. 'click') The second is the callback function, or the function that runs when the event is triggered

- The insertAdjacentHtml method takes two arguments. The first argument is a string that specifies the position of the inserted element. The second argument is a string containing the HTML to be inserted.

- A for...of loop is used to iterate over elements in an iterable object like an array. The variable declared in the loop represents the current element being iterated over.
