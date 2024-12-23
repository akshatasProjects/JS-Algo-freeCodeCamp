const character = "#";
const rows = [];
const count = 8;
let result = "";

for (let i = 0; i < count; i++) {
  rows.push(padRow());
}

for (const row of rows) {
  result = result + row + "\n";
}

function padRow(rowNumber, rowCount) {
  return character.repeat(rowNumber);
}
