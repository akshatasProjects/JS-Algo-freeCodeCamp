/*
  Get Input: Take a string as input from the user.
  
  Preprocess the String: 
  Convert it to lowercase and remove non-alphanumeric characters (to ensure uniformity).
  
  Reverse the String: 
  Create a reversed version of the processed string.

  Compare Original and Reversed Strings: 
  If both are the same, it is a palindrome; otherwise, it is not.

*/

const textInputlEle = document.getElementById("text-input").Value;
const btnEle = document.getElementById("check-btn");
const resultEle = document.getElementById("result");

btnEle.addEventListener("click", () => {
  if (textInputlEle === " ") {
    alert("Please input a value");
  } else {
    let processedStr = textInputlEle.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedStr = processedStr.split("").reverse().join("");
    return processedStr === reversedStr;
  }
});
