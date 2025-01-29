# Array Methods by building a Music Player

Now let's learn some essential string and array methods like the find(), forEach(), map(), and join(). These methods are crucial for developing dynamic web applications.

- In this project, you'll code a basic MP3 player using HTML, CSS, and JavaScript.

- The project covers fundamental concepts such as handling audio playback, managing a playlist, implementing play, pause, next, previous, and shuffle functionalities

- You'll even learn how to dynamically update your user interface based on the current song.

## Step 1

The HTML and CSS of this project have been provided for you, so you can focus on the JavaScript.

Start by accessing the #playlist-songs, #play, and #pause elements with the getElementById() method. Assign them to variables playlistSongs, playButton and pauseButton respectively.

## Step 2

Access the #next, #previous and #shuffle elements from the HTML file.

Assign them to variables named nextButton, previousButton, and shuffleButton, respectively.

## Step 3

Next, create an array to store all the songs.
Create an empty allSongs array.

## Step 7

We've added the rest of the songs to the allSongs array for you.

Next, you'll learn about the Web Audio API and how to use it to play songs. All modern browsers support the Web Audio API, which lets you generate and process audio in web applications.

Use const to create a variable named audio and set it equal to new Audio(). This will create a new HTML5 audio element.

## Step 8

Your music player should keep track of the songs, the current song playing, and the time of the current song. To do this, you will need to create an object to store this information.

Start by using the let keyword to declare a new variable called userData and assign it an empty object.

## Step 9

Since users will be able to shuffle and delete songs from the playlist, you will need to create a copy of the allSongs array without mutating the original. This is where the spread operator comes in handy.

The spread operator (...) allows you to copy all elements from one array into another. It can also be used to concatenate multiple arrays into one. In the example below, both arr1 and arr2 have been spread into combinedArr:

Inside the userData object create a songs property. For the value, spread allSongs into an array.

## Step 10

To handle the current song's information and track its playback time, create a currentSong and songCurrentTime properties. Set the values to null and 0 respectively.

## Step 11

In the previous projects, you used regular functions. But in the rest of the projects, you will be working with arrow functions. The next few steps will focus on teaching you the basics of arrow functions.

An arrow function is an anonymous function expression and a shorter way to write functions. Anonymous means that the function does not have a name. Arrow functions are always anonymous.

## Step 12

To call a named arrow function expression, you can reference the function by its name.
Below your printGreeting function definition, call the function. Open up the console to see the output.

Create a new named arrow function called printMessage that has one parameter called org. Inside the body of that function, add a console statement. Inside that console statement, add the template literal ${org} is awesome!.

Below your printMessage function, call the function and pass in the string "freeCodeCamp" as an argument.

Open up the console to see the result.

## Step 14

Just like regular functions, arrow functions can return values.

Here is an example of an arrow function returning the result of multiplying two numbers:

Create a new variable called addTwoNumbers and assign it an arrow function. This arrow function should take two parameters called num1 and num2. Inside the body of the function, return the expression of adding num1 and num2.

Below the addTwoNumbers function, add a console statement. Inside that console statement, call the addTwoNumbers function and pass in the numbers 3 and 4 as arguments.

Open up the console to see the output.

## Step 15

If the arrow function is returning a simple expression, you can omit the return keyword and the curly braces {}. This is called an implicit return.

Refactor, or update, your addTwoNumbers function to remove the return keyword and the curly braces {}. Your addTwoNumbers function should instead use an implicit return.

Open up the console to make sure that you are still getting the correct output.

## Step 16

Now it is time to apply what you have learned about arrow functions to your music player project.

Start by removing the printGreeting, printMessage, and addTwoNumbers functions. Also, remove all of the console statements and function calls.

## Step 17

To display the songs in the UI (User Interface), you'll need to create a function.

Use the arrow function syntax to create a renderSongs function that takes in array as its parameter.

## Step 18

When the songs are displayed on the page, it should show the title, artist, duration of each song and a delete button.

In the next few steps, you will learn how to add new HTML for each song using the map() method. This method will be explained in more detail in the next step.

Start by using const to declare a variable named songsHTML and assign it array.map().

## Step 19

The map() method is used to iterate through an array and return a new array. It's helpful when you want to create a new array based on the values of an existing array.

## Step 20

Inside the map(), add a return statement with backticks where you will interpolate all the elements responsible to displaying the song details.

Inside the backticks, create an li element with an id attribute of song-${song.id} and a class attribute of playlist-song.

# ------------------------ NOTES -----------------------

- The Web Audio API and how to use it to play songs. All modern browsers support the Web Audio API, which lets you generate and process audio in web applications.

- The spread operator (...) allows you to copy all elements from one array into another. It can also be used to concatenate multiple arrays into one. In the example below, both arr1 and arr2 have been spread into combinedArr:

- An arrow function is an anonymous function expression and a shorter way to write functions. Anonymous means that the function does not have a name. Arrow functions are always anonymous.
- To create a named arrow function, you can assign the function to a variable

- IMPLICIT RETURN in Arrow Function
  If the arrow function is returning a simple expression, you can omit the return keyword and the curly braces {}. This is called an implicit return.

- Map() Method
  The map() method is used to iterate through an array and return a new array. It's helpful when you want to create a new array based on the values of an existing array

  Notice that the map() method takes a function as an argument. This is called a callback function, which is a function that is passed to another function as an argument.
