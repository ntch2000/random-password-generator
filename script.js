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

  // declaration of boolean variables for the character types of include in the password
  var lowerCase;
  var upperCase;
  var numeric;
  var specialChar;

  // boolean variable for checking if at least one character type was chosen for the password
  var characterChoice = false;

  //while loop checks to see if password length is the proper size and continues to ask the user for the correct size until passwordLength meets size requirements

  while (passwordLength < 8 || passwordLength > 128) {
    // Prompts user for the password length
    passwordLength = prompt(
      "What length of password would you like to generate?"
    );

    // Checks to see if passwordLength is of the correct size and alerts user on the proper size if password length is of the wrong size
    if (passwordLength < 8) {
      alert("Password length must be longer than 8 characters!");
    } else if (passwordLength > 128) {
      alert("Password length must be less than 129 characters");
    } else console.log(passwordLength);
  }

  // while loop checks to see if a valid character type was chosen, if not, the user is asked to confirm character types again
  while (characterChoice === false) {
    // prompts users for the type of characters to include in the password and sets the corresponding boolean variable to true or false based on the input
    lowerCase = confirm("Click OK to confirm using lowercase characters.");
    console.log("Lowercase Characters: " + lowerCase);
    upperCase = confirm("Click OK to confirm using uppercase characters.");
    console.log("Uppercase Characters: " + upperCase);
    numeric = confirm("Click OK to confirm using numeric characters.");
    console.log("Numeric Characters: " + numeric);
    specialChar = confirm("Click OK to confirm using special characters.");
    console.log(`Special Characters: ${specialChar}`);

    // validates user input of character types to ensure at least 1 character type is included
    if (
      lowerCase === true ||
      upperCase === true ||
      numeric === true ||
      specialChar === true
    ) {
      characterChoice = true;
      console.log("You are good!");
    } else {
      alert("You need to choose at least one type of character to use.");
    }
  }
  console.log(`Character chosen: ${characterChoice}`);
  return `A ${passwordLength} size string for the password!`;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
