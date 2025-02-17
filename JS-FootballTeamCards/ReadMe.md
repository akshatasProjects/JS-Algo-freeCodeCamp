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

<!-- Notes -->

Object.freeze(obj) - The next step is to ensure that you can't modify this object by adding or removing any properties.

- The object destructuring syntax allows you to unpack values from arrays and objects: const { name, isDeveloper } = developerObj;
