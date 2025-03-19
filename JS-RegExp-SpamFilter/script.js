/*Notes

- Regular expressions can take flags to modify their behavior. For instance, 
the i flag can be used to make the expression ignore case, causing it to match hello, 
HELLO, and Hello for the expression /hello/.

- Strings have a .match() method, which accepts a regular expression as an argument 
and determines if the string matches that expression.

- Instead of using the .match() method, you can use the .test() method of a regular 
expression to test if a string matches the pattern. Unlike .match(), 
.test() returns a boolean value indicating whether or not the string matches the pattern.

- The alternate sequence | can be used to match either the text on the left or the 
text on the right of the |. For example, the regular expression /yes|no/ will match 
either yes or no.

/*

// Step 1 : DOM
/*
Step 2
Attach an event listener to your checkMessageButton, listening 
for the click event. Give it an empty callback function.  

Step 3
If the messageInput is empty, display an alert to the user with 
the message "Please enter a message.".
Then, exit the function execution.

Step 4
Create an isSpam function using the const keyword and arrow syntax.
The function should take a single parameter msg and implicitly 
return false for now.

Step 5
After the if statement, use a ternary operator to check the 
truthiness of calling isSpam() with messageInput.value as the 
argument. If true, set the textContent property on the result 
element to "Oh no! This looks like a spam message.". Otherwise, 
set it to "This message does not seem to contain any spam."
Then set the messageInput element's value property to an empty 
string.

Step 6
Your first regular expression will be used to catch help requests. Declare a 
helpRegex variable, and assign it a regular expression that matches the string 
please help.

Step 7
Flags are added after the trailing slash. Add the i flag to your helpRegex.

Step 8
Update your isSpam() function to implicitly return the result of calling the .match() 
method on msg, passing helpRegex as the argument.

Step 9
Update your isSpam() function to use the .test() method of helpRegex to 
test if msg is a match

Step 10
Update your helpRegex to match either please help or assist me.

*/

const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");
const helpRegex = /please help|assist me/i;

checkMessageButton.addEventListener("click", () => {});

if (messageInput.value === "") {
  alert("Please enter a message.");
  return;
}

result.textContent = isSpam(messageInput.value)
  ? "Oh no! This looks like a spam message."
  : "This message does not seem to contain any spam.";
messageInput.value = ``;

const isSpam = (msg) => {
  return helpRegex.test(msg);
};
