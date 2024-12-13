<!---
  Readme Md file shortcuts
# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6

2. Paragraphs
* To split your information up into paragraphs (with a noticeable gap between each paragraph).
* Paragraphs are divided by a blank line (a line containing no characters) between consecutive paragraphs.

3. Line breaks
To insert a line break into your Markdown file, finish your line with at least two spaces and press return. It will render a new line for your text.

4. Italics
Wrap the item with one star/underscore on each side.

*one star on each side*
_This text is also italic_


5. Bold
Wrap the item with two stars/underscores on each side.
**two stars on each side**
__This text is also bold__

6. Simultaneously Bold and Italic
Make your text Simultaneously bold and italic to give it even more weight!
Use three asterisks (or three underscores) to wrap your word or phrase.
***This text is italic and bold.***
___This text is also italic and bold.___


7. Striking through
Wrap the item in two tildes on each side.
~~strikethrough~~

8. Links
To link to external websites in Markdown content use two sets of brackets.
Wrap link text in brackets [ ], and then wrap the URL in parentheses ( ): [ ]( ).

[This text links to gfg](https://write.geeksforgeeks.org/).

9. Images
![altText](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210914130327/100-Days-of-Code-with-GFG-Get-Committed-to-a-Challenge.png)

10. Unordered lists
Markdown allows you to format your lists with several different symbols: asterisks (*), hyphens (-), or plus signs (+).

11. Ordered lists
Format your ordered lists by preceding each list item with a number, followed by a full stop and then a space.

12. Blockquotes
Sometimes in Markdown, we will want to reference an external source using quotation marks. It is called a blockquote.

You represent any blockquote by preceding the first line of the block quote with a greater-than sign or angle bracket (>).

> This is a blockquote

13. Horizontal rules
We represent a horizontal rule by three or more hyphens (-), asterisks (*), or underscores (_).

---
* * *
___

14. Code snippets
The first backtick “opens” the snippet, and the second backtick “closes” it

`This is a code snippet.`

15. Code blocks

```javascript
if (isAwesome){
 return true
}

```

check for more

https://www.geeksforgeeks.org/what-is-readme-md-file/#google_vignette

-->

# JS Algoritham

## Let's build a pyramid using JavaScript basics

### 15 steps per day will complete this in 8 days from 12th Dec to 20th.

1. Step 1

JavaScript is the programming language that powers the web. Unlike the HTML and CSS you have learned previously, JavaScript is most commonly used to write logic instead of markup.

In this project, you will learn the basics of Javascript and apply those concepts to building a pyramid generator.

` A pyramid generator is a program where you can set the type of character, the count for the pyramid, and the direction of the pyramid. The program will then generate a pyramid based on those inputs.`

2.  Step - 2

    Variable naming follows specific rules: names can include letters, numbers, dollar signs, and underscores, but cannot contain spaces and must not begin with a number.`Used the let keyword to declare a variable called character.`

3.  Step - 3

    Assigning a value to a variable at the moment of its declaration is known as initialization.
    `Initialize your character variable by assigning it the value "Hello" during its declaration. `

4.  Step - 4

    JavaScript has seven primitive data types, with String being one of them. `Note that strings are immutable, which means once they are created, they cannot be changed. The variable can still be reassigned another value.`

5.  Step - 5

    The console allows you to print and view JavaScript output. You can send information to the console using console.log().
    `Print the value of the character variable to the console. Then, click the "Console" button to view the JavaScript console.`

6.  Step - 6

    When a variable is declared with the let keyword, you can reassign (or change the value of) that variable later on.
    `After your console.log, assign the value "World" to your character variable.`

7.  Step 7

    Now log your character variable to the console again. You should see the string "Hello", then the string "World", in the console.

8.  Step 8

    When variable names are more than one word, there are specific naming conventions for how you capitalize the words. In JavaScript, the convention to use is camel case.
    `Camel case means that the first word in the name is entirely lowercase, but the following words are all title-cased.`

    Use camel case to declare a new secondCharacter variable.

9.  Step 9

    When you declare a variable without initializing it, it is considered uninitialized.

10. Step 10
    The default value of an uninitialized variable is undefined. This is a special data type that represents a value that does not have a definition yet.

11. Step 11

    You can also assign the value of a variable to another variable. For example

           let first = "One";
           let second = "Two";
           second = first;

    `To see this in action, change your secondCharacter assignment from "Test" to your character variable.`

12. Step 12
    You are now ready to declare your next variable. Remove both console.log statements, and the character reassignment.

    remove everything except character initialization.

13. Step 13
    Before moving forward, you should take a moment to review the concepts you have learned.

    `Use the let keyword to declare a profession variable and an age variable. Initialize profession with the string "teacher", but do not initialize age with any value.Log both of your variables to the console to see the results.`

14. step 14
    Now that you have reviewed declaration and initialization, remove the code you wrote for your review.

    Do not remove your character variable.

15. step 15

    Use let to declare a count variable. Assign it the number 8.

16. Step 16

    With the number data type, you can perform mathematical operations, like addition. Try printing count + 1 to the console.

17. Step 17

    You can also perform subtraction (-), multiplication (\*), and division (/). Feel free to experiment with the operators and numbers in your console.log. When you are ready to move on, remove the console.log.

18. Step 18

    In programming, you will often need to work with lots of data. There are many data structures that can help you organize and manage your data. One of the most basic data structures is an "array".

    An array is a non-primitive data type that can hold a series of values.

    Non-primitive data types differ from primitive data types in that they can hold more complex data.

    Primitive data types like strings and numbers can only hold one value at a time.

    Arrays are denoted using square brackets ([]).

        let array = [];

    `Decalre a variable rows and assign empty array`

19. Step 19

    When an array holds values, or elements, those values are separated by commas.
    ` Change your rows declaration to be an array with the strings "Naomi", "Quincy", and "CamperChan". The order of values in an array is important, so follow that order. Remember that strings are case-sensitive.`

20. Step 20

    You can access the values inside an array using the index of the value. An index is a number representing the position of the value in the array, starting from 0 for the first value.
    You can access the value using bracket notation, such as array[0].
    `Use console.log and bracket notation to print the first value in your rows array.`

21. Step 21

    Arrays are special in that they are considered mutable. This means you can change the value at an index directly.

        let array = [1, 2, 3];
        array[1] = 25;
        console.log(array); // prints [1, 25, 3]

    `Update the third element of your rows array to be the number 10. Then print the rows array to your console. `

22. Step 22

    Notice how the value inside your rows array has been changed directly? This is called mutation.
    As you learn more about arrays, you will learn when to mutate an array, and when you should not.

    Before moving on, this is a great opportunity to learn a common array use.

    Currently, your code accesses the last element in the array with rows[2]. But you may not know how many elements are in an array when you want the last one.

    You can make use of the .length property of an array - this returns the number of elements in the array. To get the last element of any array, you can use the following syntax:

        array[array.length - 1]

    array.length returns the number of elements in the array. By subtracting 1, you get the index of the last element in the array. You can apply this same concept to your rows array.

    `Update your rows[2] to dynamically access the last element in the rows array.`

23. Step 23

    For now, remove your first console log and your rows[rows.length - 1] assignment. Leave the second rows log statement for later.

24. Step 24

    In the last few steps, you learned all about working with arrays. Take a moment to review what you have learned.

    `Start by declaring a cities variable and initializing it as an array of the strings "London", "New York", and "Mumbai". Then log that variable to the console. After logging, change the last element of cities to the string "Mexico City", then log the cities variable again. `

25. Step 25

    Now you are ready to move onto the next set of array lessons.

    Remove all of your code from the previous step.

26. Step 26

    A method in JavaScript is a function that's associated with certain values or objects.

        An example you've already encountered is the .log() method, which is part of the console object.

    Arrays have their own methods, and the first you will explore is the .push() method.
    This allows you to <strong>"push" a value to the end of an array.</strong> Here is an example to add the number 12 to the end of an array:

            array.push(12);

    `Use .push() to add the string "freeCodeCamp" to the end of your rows array. Add this code before your console.log so you can see the change you made to your array`

27. Step 27

    Another method essential for this project is the <b>.pop() method. It removes the last element from an array and <i>returns</i> that element.</b>

    When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.

    `Create a new variable called popped and assign it the result of rows.pop(). Then, log popped to the console.`

28. Step 28
    You should have seen "freeCodeCamp" printed to the console. This is because .pop() returns the value that was removed from the array - and you pushed "freeCodeCamp" to the end of the array earlier.

    But what does .push() return?
    ` Assign your existing rows.push() to a new pushed variable, and log it.`

29. Step 29

    Were you expecting to see 4 in the console? .push() returns the new length of the array, after adding the value you give it.

    <i>It is important to be aware of what values a method returns. </i>

    ` Take some time to experiment with .push() and .pop(). When you are ready, remove all of your .push() and .pop() calls, and your console.log statements.`

30. Step 30

    Change your rows declaration to be assigned an empty array again.

    Also, `change your 'Hello' string to use double quotes again. Generally, it does not matter which of the two you prefer, but you will want to be consistent in that choice throughout your project`.
