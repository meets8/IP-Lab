// Write JS Program that will accept an input string from the user and find the longest word in the string
// let sentence = prompt('Hello, enter a sentence');
// console.log(sentence);
function findLongestWord(inputString) {
    let longestWord = "";
    let currentWord = "";
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
  
      if (char !== " " && char !== ".") {
        currentWord += char;
      } else {
        if (currentWord.length > longestWord.length) {
          longestWord = currentWord;
        }
        currentWord = "";
      }
    }
  
    // last word
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  
    return longestWord;
  }
  
  function findLongestWordAndDisplay() {
    const userInput = document.getElementById("sentence").value;
    const longest = findLongestWord(userInput);
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The longest word is: ${longest}`;
  }
