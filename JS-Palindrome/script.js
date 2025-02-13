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

/*

const checkBtn = document.getElementById("check-btn");
const textEle = document.getElementById("text-input").value.trim();
const resultEle = document.getElementById("result");

/*let processedStr = textEle.toLowerCase().replace(/[^a-z0-9]/g, "");
let convertedStr = processedStr.split("").reverse().join("");*/

// checkBtn.addEventListener("click", ()=>{

//   if(textEle === ""){
//     alert("Please input a value");
//   } else if(textEle === str){
//      let str = textEle.toLowerCase().split("").reverse().join("");

//      resultEle.innerText = `${textEle} is a palindrome`;
//     } else{
//        resultEle.innerText = `${textEle} is not a palindrome`;
//     }
// })
