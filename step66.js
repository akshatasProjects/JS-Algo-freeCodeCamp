const character = "#";
const count = 8;
const rows = [];
let resubmit = "";

for (let i = 0; i < count; i++) {
  rows.push(padRow(i + 1, count));
}

for (const row of rows) {
  result = result + row + "\n";
}

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(rowNumber) +
    " ".repeat(rowCount - rowNumber)
  );
}
