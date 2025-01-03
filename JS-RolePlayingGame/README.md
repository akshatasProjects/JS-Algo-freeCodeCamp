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

# Role Playing Game - Using JS

JavaScript is a powerful scripting language that you can use to make web pages interactive. It's one of the core technologies of the web, along with HTML and CSS. All modern browsers support JavaScript.

In this practice project, you'll learn fundamental programming concepts in JavaScript by coding your own Role Playing Game. You'll learn how to work with arrays, strings, objects, functions, loops, if/else statements, and more.

1.  Step 1

    To get started, create your standard HTML boilerplate with a DOCTYPE, html, head, and body, then add a meta tag for the charset. Add a title element and use the text RPG - Dragon Repeller for it. Include a link tag for your stylesheet to link the styles.css file.

    Finally, create a div element with id set to game within your body.

2.  Step 2

    Now you can start writing your JavaScript. Begin by creating a script element. This element is used to load JavaScript into your HTML file.

3.  Step 3

    The developer console will include errors that are produced by your code, but you can also use it to see values of variables in your code, which is helpful for debugging.

    Add a console.log("Hello World"); line between your script tags. Then click the "Console" button to open the console. You should see the text "Hello World".

4.  Step 4

    Before you start writing your project code, you should move it to its own file to keep things organized.

    Remove your console.log("Hello World"); line. Then give your now empty script element a src attribute set to ./script.js.

5.  Step 5

    Remove your console.log("Hello World"); line to begin writing your project code.

    - Use the let keyword to declare a variable called xp and assign it the value of 0, a number.

6.  Step 6
    Initialize another variable called health with a value of 100, and a variable called gold with a value of 50.

7.  Create another variable called "currentWeaponIndex" and set it to 0.

8.  Declare a variable called fighting but do not initialize it with a value.

9.  In your role playing game, users will be able to track their stats, buy weapons, and fight monsters. Before you can continue with the interactive JavaScript portion of the game, you need to first create the HTML elements that will display the game information.

    - Create four div elements within your #game element. Give them the following
      respective id values, in order: stats, controls, monsterStats, and text.

10. Step 12

    Create three span elements within your #stats element. Give each of them the class stat. Then give the first one the text XP: 0, the second one the text Health: 100, and the third one the text Gold: 50.

11. Step 13

    Wrap the numbers 0, 100, and 50 in span elements, and wrap those new span elements in strong elements. Then give your new span elements id values of xpText, healthText, and goldText, respectively.

12. Step 14

    For your #controls element, create three button elements. The first should have the id set to button1, and the text Go to store. The second should have the id set to button2, and the text Go to cave. The third should have the id set to button3, and the text Fight dragon.

13. Step 15

    JavaScript interacts with the HTML using the Document Object Model, or DOM. The DOM is a tree of objects that represents the HTML. You can access the HTML using the document object, which represents your entire HTML document.

    One method for finding specific elements in your HTML is using the querySelector() method.

    - The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector.

14. Step 16

    We have run into a slight problem. You are trying to query your page for a button element, but your script tag is in the head of your HTML. This means your code runs before the browser has finished reading the HTML, and your document.querySelector() will not see the button - because the browser hasn't processed it yet.

    To fix this, move your script element out of the head element, and place it at the end of your body element (just before the closing </body> tag).

15. Step 17

    button1 is a variable that is not going to be reassigned. If you are not going to assign a new value to a variable, it is best practice to use the const keyword to declare it instead of the let keyword. This will tell JavaScript to throw an error if you accidentally reassign it.

    Change your button1 variable to be declared with the const keyword.

16. Step 18

    Use querySelector() to get the other two button elements using their ids: button2 and button3. Store them in variables called button2 and button3. Remember to use const.

17. Step 19

    Similar to your #stats element, your #monsterStats element needs two span elements. Give them the class stat and give the first element the text Monster Name: and the second the text Health: . After the text in each, add a strong element with an empty nested span element. Give the first inner span element an id of monsterName and the second inner span element an id of monsterHealth.
