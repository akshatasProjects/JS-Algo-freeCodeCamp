const numInput = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const result = document.getElementById("output");

btn.addEventListener("click", () => {
  let numValue = Number(numInput.value);

  if (!numValue) {
    result.innerText = "Please enter a valid number";
    return;
  }

  if (numValue < 0) {
    result.innerText = "Please enter a number greater than or equal to 1";
    return;
  }

  if (numValue >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  const output = convertNumToRoman(numValue);
  result.innerText = output;
});

function convertNumToRoman(numValue) {
  const arabicValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanValue = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let roman = "";
  let i = 0;

  while (numValue > 0) {
    const div = Math.floor(numValue / arabicValue[i]);
    numValue -= div * arabicValue[i];
    roman += romanValue[i].repeat(div);
    i++;
  }
  return roman;
}
