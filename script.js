// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //set initial password length to 0 to initial while loop
  var passwordLength = 0;

  //while loop checks to see if password length is the proper size and continues to ask the user for the correct size until passwordLength meets size requirements

  while (passwordLength < 8 || passwordLength > 128) {
    // Prompts user for the password length
    passwordLength = prompt(
      "What length of password would you like to generate?"
    );
    if (passwordLength < 8 || passwordLength > 128) {
      alert(
        "Password length must be longer than 8 characters and less than 129 characters"
      );
    } else return "A string for the password!";
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
