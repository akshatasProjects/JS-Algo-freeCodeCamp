document.getElementById("check-btn").addEventListener("click", function () {
  let inputText = document.getElementById("text-input").value.trim();
  let resultElement = document.getElementById("result");

  // Check if input is empty
  if (inputText === "") {
    alert("Please input a value.");
    return;
  }

  // Palindrome check function
  function isPalindrome(str) {
    let processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedStr === processedStr.split("").reverse().join("");
  }

  // Display result
  if (isPalindrome(inputText)) {
    resultElement.textContent = `"${inputText}" is a palindrome!`;
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = `"${inputText}" is not a palindrome.`;
    resultElement.style.color = "red";
  }
});
