const character = "*";
const rows = [];
const count = 8;
let result = "";
let done = 0;

function padRow(rowNumber, rowCount) {
  return (
    "".repeat(rowCount - rowNumber) +
    character.repeat(rowNumber - rowCount) +
    "".repeat(rowCount - rowNumber)
  );
}

for (let row of rows) {
  result = result + row + "\n";
}

while (done <= count) {
  done++;
  rows.push(padRow(done, count));
}
