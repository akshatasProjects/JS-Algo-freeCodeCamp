const character = "#";
const rows = [];
const count = 8;
let result = "";
let continueLoop = false;
let done = 0;

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
