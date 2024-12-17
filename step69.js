const character = "#";
const rows = [];
const count = 8;
let result = "";

for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

for (const row of rows) {
  result = result + row + "\n";
}

function padRow(rowNumber, rowCount) {
  " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber);
}

//Create an if statement with the boolean true as the condition. In the body, print the string "Condition is true".

if (true) {
  console.log("Condition is true");
}
