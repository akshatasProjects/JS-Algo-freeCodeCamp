# Football Team Cards

- h1 has class "title"
- div which contains all data has a class "team-stats"
- inside div have span with id="team", "sport", "year", "head-coach"
- Option label which is a drop down has class "options-label"
- dropdown using select element has id of "players"
- div with player details has class "player-card" there are total 22 cards.
- The main div which contains all the cards has class="cards" id="player-cards"

## In this project, you will build a set of football team cards and learn about

- nested objects,
- object destructuring
- default parameters.

1. Start by accessing the id called "team" from the HTML document and storing it in a const variable called teamName.
<!-- <p>Team: <span id="team"></span></p> -->

2. Next, access the id called "sport" from the HTML document and store it in a const variable called typeOfSport. Below that variable, assign the id of "year" to a const variable called worldCupYear.
<!--  <p>Sport: <span id="sport"></span></p>
        <p>Year: <span id="year"></span></p> -->
3. Next, access the id called "head-coach" from the HTML document and store it in a const variable called headCoach. Below that variable, assign the id of "player-cards" to a const variable called playerCards.

4. Inside the myFavoriteFootballTeam object, add a new property with a key named team and a string value of "Argentina".

5. Below the team property, add four property key-value pairs.
   A key named sport and a string value of "Football".
   A key named year and a number value of 1986.
   A key named isWorldCupWinner and a boolean value set to true.
   A new key called headCoach with a value of an empty object.

6. The next step is to ensure that you can't modify this object by adding or removing any properties. We are going to use a method called Object.freeze(obj) which will freeze this object and prevent any changes being made to it.

7. The object destructuring syntax allows you to unpack values from arrays and objects:

8. Now you need to access the coachName value from the myFavoriteFootballTeam.headCoach object using the destructuring syntax.

9. Now you need to start displaying the team's information on the screen.
   Below your destructuring assignments, assign the sport variable to typeOfSport.textContent

10. Next, assign the team variable to teamName.textContent.

11. Start by creating an empty arrow function called setPlayerCards.

12. Add a new parameter to your setPlayerCards function called arr and assign it a default value of players. Remember that you destructured the players variable.

13. Inside the setPlayerCards function, start by adding the map method to arr that will take in an empty callback function. Then, use the addition assignment += operator to assign the new array to playerCards.innerHTML.

14. arr contains a series of objects that each contains a name, position, number, isCaptain and nickname property. In order to access each of those properties inside the callback function, you will need to use object destructuring to unpack them into variables.

15. Inside the body of the callback function, you will need to return a template literal `` which will contain the HTML content for the player cards.

16. Inside the div, add an h2 element which contains the name parameter. Since you are working with template literals, you will need to use an embedded expression for the name parameter

17. Before the ${name} expression, add a new embedded expression. Inside that expression, use a ternary operator to check if isCaptain is true. If so, return "(Captain)" otherwise return an empty string.

18. The .map() method will return a new array of player-card items separated by commas.
    To remove the commas between each player-card so it does not show up on screen, chain the .join() method to the .map() method. Pass an empty string as the argument for the .join() method.

19. Use the .addEventListener() method on playersDropdownList. Inside the event listener, pass in a "change" event type and an empty callback function.

20. Inside the callback function, add a console.log with the value of e.target.value

21. The next step would be to reset the content for the playerCards element. Inside the callback function, access the innerHTML property of the playerCards element and assign it a value of an empty string

22. The next step would be to add a switch statement which will check for the user's selection from the player dropdown menu and filter out cards based on the player's positions. Add a switch statement and use e.target.value for the expression.

23. Add a new case for "midfielder" that checks if player.position equals "midfielder" following the same pattern from the previous step.

24. For the default clause, call the setPlayerCards function without any arguments passed in.

<!-- Notes -->

Object.freeze(obj) - The next step is to ensure that you can't modify this object by adding or removing any properties.

- The object destructuring syntax allows you to unpack values from arrays and objects: const { name, isDeveloper } = developerObj;

- Default Values - Function parameters can be initialized with default values. If a function is called without an argument, then the default value will be used.

- The innerHTML property gets, or in this case, sets the HTML markup for the playerCards element.

- The .map() method will return a new array of player-card items separated by commas.

- e represents an object which contains the information for that event.

- e.target.value represents the value property from the playersDropdownList element. In future steps, you will use this value to show player cards based on the position they play.
