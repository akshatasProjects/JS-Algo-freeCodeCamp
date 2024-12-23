const character = "#";
const count = 8;
const rows = [];
let result = "";

for (let i = 0; i < count; i++) {
  rows.push(i);
}

for (const row of rows) {
  result = result + row;
}
