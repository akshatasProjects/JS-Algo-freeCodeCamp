function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the string
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Check if the original and reversed strings are the same
  return cleanedStr === reversedStr;
}

// Example usage
const testString = "A man, a plan, a canal, Panama";
console.log(`Is "${testString}" a palindrome?`, isPalindrome(testString));
