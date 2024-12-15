const character = "#"; //string
const count = 8; //number
const rows = []; //array

let result = ""; //string

for (let i = 0; i < count; i++) {
  rows.push(character.repeat(i));
}

for (const row of rows) {
  result = result + row + "\n";
}

function padRow() {}

const call = padRow();
