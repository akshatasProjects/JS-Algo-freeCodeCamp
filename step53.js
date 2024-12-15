const character = "#";
const count = 8;
const rows = [];
let result = "";

for (let i = 0; i < count; i++) {
  rows.push(character.repeat(i + 1));
}

for (const row of rows) {
  result = result + row + "\n";
}

function padRow(name) {
  return name;
}

const call = padRow();
