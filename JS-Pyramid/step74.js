const character = "#";
const count = 0;
const rows = [];
let result = "";

while (done != count) {
  done++;
  rows.push(padRow(done, count));
}

for (let row of rows) {
  result = result + row + "\n";
}
