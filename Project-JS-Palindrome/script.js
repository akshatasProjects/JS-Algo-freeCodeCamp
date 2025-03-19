const textInput = document.getElementById("text-input");
const chkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

chkButton.addEventListener("click", () => {
  let lowerReplaced = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (textInput.value === "") {
    alert("Please input a value");
  } else if (textInput.value.length === 1) {
    result.innerText = `${textInput.value} is a Palindrome`;
  } else if (lowerReplaced === [...lowerReplaced].reverse().join("")) {
    result.innerText = `${textInput.value} is a palindrome`;
  } else {
    result.innerText = `${textInput.value} is not a palindrome`;
  }
});

// Spread can be replaced with split also
// For simple strings, both [...] and .split('') are fine.
// For Unicode support(emoji), use Array.from().
