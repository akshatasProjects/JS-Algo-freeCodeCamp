const character = "#";
const count = 8;
const rows = [];
let result = "";

for (let i = 0; i < count; i++) {
  rows.push(character);
}

for (const rowEle of rows) {
  result = result + rowEle + "\n";
}
