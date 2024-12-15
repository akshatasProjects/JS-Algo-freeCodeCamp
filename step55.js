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

const call = padRow("Akshata");
console.log(call);

/* Declare a sum variable and assign it the value of calling your
 addTwoNumbers function with 5 and 10 as the arguments. 
 Log the sum variable to the console.*/

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

let sum = addTwoNumbers(5, 10);
console.log(sum);
