const character = "#";
const count = 8;
const rows = [];
let result = "";

for (let i = 0; i < count; i++) {
  rows.push(padrow(i + 1, count));
}

for (const row of rows) {
  result = result + row + "\n";
}

function padRow(rowNumber, rowCount) {
  return character.repeat(rowNumber);
}
