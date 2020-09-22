// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // declaration of initial character sets
  var lowerCaseCharString = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharString = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var numericCharString = "0123456789";

  // declaration of password character set
  var passwordCharSet = "";

  //set initial password length to 0 to initial while loop
  var passwordLength = 0;

  // declaration of boolean variables for the character types of include in the password
  var lowerCase;
  var upperCase;
  var numeric;
  var specialChar;

  // boolean variable for checking if at least one character type was chosen for the password
  var characterChoice = false;

  var finalPasswordString = "";

  // while loop checks to see if password length is the proper size and continues to ask the user for the correct size until passwordLength meets size requirements
  // checks to make sure the password length entered is an integer

  while (
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(passwordLength) ||
    Number.isInteger(+passwordLength) != true
  ) {
    // Prompts user for the password length
    passwordLength = prompt(
      "What length of password would you like to generate?"
    );
    // breaks out of the while loop if the user hits cancel during the prompt
    if (passwordLength === null) {
      break;
    } else {
      // Checks to see if passwordLength is of the correct size and alerts user on the proper size if password length is of the wrong size
      if (passwordLength < 8) {
        alert("Password length must be longer than 8 characters!");
      } else if (passwordLength > 128) {
        alert("Password length must be less than 129 characters");
      } else if (
        // conditional to check to see if input entered is no a number (NaN) or not an integer. If so, alerts the user to enter the correct size integer
        isNaN(passwordLength) ||
        Number.isInteger(+passwordLength) != true
      ) {
        alert(
          "Password length must be an integer greater than 8 and less than 129."
        );
      }
    }
  }

  // if the user cancels out of the prompt for password length, the function returns a message stating the password  generation was cancelled
  if (passwordLength === null) {
    return "User cancelled Password Generation";
  }

  // while loop checks to see if a valid character type was chosen, if not, the user is asked to confirm character types again
  while (characterChoice === false) {
    // prompts users for the type of characters to include in the password and sets the corresponding boolean variable to true or false based on the input
    lowerCase = confirm("Click OK to confirm using lowercase characters.");

    // if the user confirms the use of lowercase characters, the lowercase character set string is added to the password character set string
    if (lowerCase) {
      passwordCharSet += lowerCaseCharString;
    }

    upperCase = confirm("Click OK to confirm using uppercase characters.");

    // if the user confirms the use of uppercase characters, the lowercase character set string is added to the password character set string
    if (upperCase) {
      passwordCharSet += upperCaseCharString;
    }

    numeric = confirm("Click OK to confirm using numeric characters.");

    // if the user confirms the use of numeric characters, the lowercase character set string is added to the password character set string
    if (numeric) {
      passwordCharSet += numericCharString;
    }

    specialChar = confirm("Click OK to confirm using special characters.");

    // if the user confirms the use of special characters, the lowercase character set string is added to the password character set string
    if (specialChar) {
      passwordCharSet += specialCharString;
    }

    // validates user input of character types to ensure at least 1 character type is included
    if (
      lowerCase === true ||
      upperCase === true ||
      numeric === true ||
      specialChar === true
    ) {
      characterChoice = true;
    } else {
      alert("You need to choose at least one type of character to use.");
    }
  }

  // sets the upper bounds of random number generator to the length of the password character set.
  var numCharacterOptions = passwordCharSet.length;

  // initiate the index of the password character set string
  var passwordCharIndex;

  // this loops through the length of the user desired password
  for (var i = 0; i < passwordLength; i++) {
    // generates a random number and sets it to the index to pick a character
    passwordCharIndex = Math.floor(Math.random() * numCharacterOptions);

    //the final password string is built by adding a random character from the password character set to the final string. The random character is based on a random index that is chosen
    finalPasswordString += passwordCharSet[passwordCharIndex];
  }
  // returns the password string to the page based on the user requirements of length, and type of character
  return finalPasswordString;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
