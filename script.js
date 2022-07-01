// Assignment Code
var generateBtn = document.querySelector("#generate"); //generate id is in the generate button in HTML

// Write password to the #password input
function writePassword() { 
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password"); //password id is in the password textbox

  passwordText.value = password; //What are we getting the value of the box & why is password = to two things
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
   

//MY CODE 

//THEN LOOP FOR THE LENGTH
// for (var i = 0; i < length; i+= passwordString)

// //THEN MATH.RANDOM FOR ASSORTMENT OF CHARACTERS
// function randomPassword () {
//     return passwordString[Math.floor(Math.random() * length)];
// }

//Validate variables

function generatePassword() {
var passwordString = ("");

    //Length
    var length = prompt("Please enter a password length between 8-128 characters.");
    if (length >= 8 && length <=128) {
        //NOT SURE WHERE TO STORE THIS
    } else { 
        alert("Please enter a password length between 8-128 characters.");
        return;
    } 

    //UpperLetters
    var upper = confirm("Include uppercase letters?\n(Ok = Yes & Cancel = No)")
    if (upper === true) {
        var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        upperLetters + passwordString; 
    }

    //LowerLeters
    var lower = confirm("Include lowercase letters?")
    if (lower === true) {
        var lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
        lowerLetters + passwordString; 
    }

    //Numbers
    var number = confirm("Include numbers?")
    if (number === true) {
        var numberList = '0123456789';
        numberList + passwordString; 
    } 

    //Symbols
    var symbol = confirm("Include symbols?")
    if (symbol === true) {
        var symbolList = '!@#$%^&*()'
        symbolList + passwordString; 
    } 

    //Confirm Criteria
    var confirmCriteria = confirm
    ("Please confirm the following selections: \n" + 
    "Length: " + length + "\n" +
    "Uppercase: " + upper + "\n" +
    "Lowercase: " + lower + "\n" +
    "Numbers: " + number + "\n" +
    "Symbols: " + symbol);
    if (confirmCriteria === true) {
        alert(passwordString); // GENERATES PASSWORD HERE!!!!!!
    } else {
        alert ("Please re-select criteria to meet your preferences.");
        return;
    }

    //All Prompts = FALSE
    if (upper === false && lower === false && number === false && symbol === false) {
        alert("Try Again.\nPlease click OK to at least one of the following criteria:\n-Uppercase Letters\n-Lowercase Letters\n-Numbers\n-Symbols");
    }
}


