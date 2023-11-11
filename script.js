
var characterLength = 8;
var choiceArr = [];

var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var numberArr = ['0','1','2','3','4','5','6','7','8','9',];
var specialCharArr = ['!','"','#','$','%','&','(',')','*','+','-','.','/','?','@','[',];


// Assignment code here
var generateBtn = document.querySelector("#generate");




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();   //will return true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
  var genPassword = generatePassword();
  passwordText.value = genPassword;
  } else {
  passwordText.value = "";
  }
}

function generatePassword() {
  //I would generatePassword based on the prompts
    var password = "";
    for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
    }
  return password;
}

function getPrompts() {
      choiceArr = [];
  
      characterLength = parseInt(prompt("How many characters for your password? (8 - 128)"));
      
      if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
          alert("Password needs to a digit(s) 8 - 128 long. Please try again.");
          return false;
      }
      if (confirm("Would you like to use uppercase letters in the password?")) {
          choiceArr = choiceArr.concat(upperCaseArr);
      }
      if (confirm("would you like to use lowercase letters in the password?")) {
          choiceArr = choiceArr.concat(lowerCaseArr);
      }
      if (confirm("Would you like to use numbers in the password?")) {
          choiceArr = choiceArr.concat(numberArr);
      }
      if (confirm("Would you like to use special characters in the password?")) {
          choiceArr = choiceArr.concat(specialCharArr);
      } 
      return true;

}