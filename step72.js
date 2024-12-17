const character = "#";
const rows = [];
const count = 8;
let result = "";
let continueLoop = false;
let done = 0;

function padRow(rowNumber, rowCount) {
  "".repeat(rowCount - rowNumber) +
    character.repeat(rowNumber - rowCount) +
    "".repeat(rowCount - rowNumber);
}

for (let row of rows) {
  result = result + row + "\n";
}

while (continueLoop) {
  done++;
  rows.push(padRow(done, count));
  if (done === count) {
    continueLoop = false;
  }
}
