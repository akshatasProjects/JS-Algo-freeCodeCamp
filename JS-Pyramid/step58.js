const character = "#";
const count = 8;
const rows = [];
let result = "";

for (let i = 0; i < count; i++) {
  rows.push(character.repeat(i));
}

for (const row of rows) {
  result = result + row + "\n";
}

function padRow() {
  const test = "Testing";
  console.log("This works");
  return test;
}

const call = padRow();
console.log(call);