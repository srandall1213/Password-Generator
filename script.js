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

    var passwordString = ""; //HOW DO I ACCESS THIS


    //Length
    var length = prompt("Please enter a password length between 8-128 characters.");
    if (length >= 8 && length <=128) {
        //NOT SURE WHAT TO PUT HERE OR WHERE TO STORE THIS VALUE
    } else { 
        alert("Please enter a password length between 8-128 characters.");
        return;
    } 

    //UpperLetters
    var upperPrompt = prompt("Include uppercase letters? Y or N")
    if (upperPrompt === "Y" || upperPrompt === "N") {
        var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        passwordString = upperLetters + passwordString;
    } else {
        alert("Please enter Y or N.")
        return;
    }

    //LowerLeters
    var lowerPrompt = prompt("Include lowercase letters?")
    if (lowerPrompt === "Y" || lowerPrompt === "N") {
        var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
        passwordString = lowerLetters + passwordString;
    } else {
        alert("Please enter Y or N.")
        return;
    }

    //Numbers
    var numberPrompt = prompt("Include numbers? Y or N")
    if (numberPrompt === "Y" || numberPrompt === "N") {
        var numberList = '0123456789';
        passwordString = numberList + passwordString;
    } else {
        alert("Please enter Y or N.")
        return;
    }

    //Symbols
    var symbolPrompt = prompt("Include symbols? Y or N")
    if (symbolPrompt === "Y" || symbolPrompt === "N") {
        var symbolList = '!@#$%^&*()';
        passwordString = symbolList + passwordString; 
    } else {
        alert("Please enter Y or N.")
        return;
    }

    //Confirm Criteria
    var confirmPrompt = confirm
    ("Please confirm the following selections: \n" + 
    "Length: " + length + "\n" +
    "Uppercase: " + upper + "\n" +
    "Lowercase: " + lower + "\n" +
    "Numbers: " + number + "\n" +
    "Symbols: " + symbol);
    if (confirmCriteria === true) {
        alert(passwordString); // GENERATE PASSWORD HERE
    } else {
        alert ("Please re-select criteria to meet your preferences.");
        return;
    }

    //All Prompts = FALSE
    if (upper === false && lower === false && number === false && symbol === false) {
        alert("Try Again.\nPlease click OK to at least one of the following criteria:\n-Uppercase Letters\n-Lowercase Letters\n-Numbers\n-Symbols");
    }
}





