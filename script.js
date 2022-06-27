// Assignment Code - GIVEN
var generateBtn = document.querySelector("#generate"); //GIVEN

// Write password to the #password input - GIVEN
function writePassword() { //GIVEN
  var password = generatePassword(); //GIVEN
  var passwordText = document.querySelector("#password"); //GIVEN
  passwordText.value = password; //GIVEN
}

// Add event listener to generate button - GIVEN
generateBtn.addEventListener("click", writePassword);//GIVEN

//shows form element with criteria on click
function generatePassword() {
  showform()
}

//show form element with criteria
function showform() {
    document.getElementById('formElement').style.display = 'block';
}

//
















