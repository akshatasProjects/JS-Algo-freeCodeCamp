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

# JS - Guest Book

- Step 1
  A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

  - Complete the getAverage function which takes in an array of test scores and returns the average score.
  - The average is calculated by adding up all the scores and dividing by the total number of scores.

        average = sum of all scores / total number of scores

  - A couple of function calls have been provided for you so you can test out your code.

  * Tips

  - You can use a loop to iterate over the scores array and add up all the scores.
  - You can use the length property to get the total number of scores.

4. Step 4

   Now that the teacher has all of the information they need, they want to be able to message the student with the results.

Complete the studentMsg function with totalScores and studentScore for parameters. The function should return a string representing a message to the student.
EX: Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.

Tips

- Use the getAverage function to get the class average.
- Use the getGrade function to get the student's grade.
- Use string concatenation (+) to build the message.
- Be careful with the punctuation and spaces in the message.
