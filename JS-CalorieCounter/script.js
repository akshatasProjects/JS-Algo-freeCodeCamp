const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
const targetInputContainer = document.getElementById("");
let isError = false;

function cleanInputString(str) {
  /* Note that you need to use the backslash \ character to 
  escape the + symbol because it has a special meaning in 
  regular expressions */
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

// to find exponential numbers or valid or not
function isInvalidInput(str) {
  const regex = /\d+ e\d+/i;
  return str.match(regex);
}

function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value}  .input-container `
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
   <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories" />
  `;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

addEntryButton.addEventListener("click", addEntry);

function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list) {
    const currVal = item.value;
  }
}
