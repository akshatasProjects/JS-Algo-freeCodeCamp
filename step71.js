const character = "#";
const rows = [];
const count = 8;
let result = "";
let continueLoop = false;
let done = 0;

function padRow(rowNumber, rowCount) {
  " ".repeat(rowCount - rowNumber) +
    character.repeat(rowNumber - rowCount) +
    "".repeat(rowCount - rowNumber);
}

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);

while (continueLoop) {
  done++;

  if (done === count) {
    continueLoop = false;
  }
}
