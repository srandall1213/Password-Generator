// Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() { 
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password; 
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
   

//MY CODE 

function generatePassword() {

    var passwordString = "";

    //Length
    var lengthPrompt = prompt("Please enter a password length between 8-128 characters.");
    if (lengthPrompt >= 8 && lengthPrompt <=128) {
        var length = lengthPrompt;
    } else { 
        alert("Please enter a password length between 8-128 characters.");
        return;
    } 

    //UpperLetters
    var upperPrompt = prompt("Include uppercase letters? Y or N");
    if (upperPrompt === "Y") {
        var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        passwordString = upperLetters + passwordString;
    } else if (upperPrompt === "N") {
        
    } else {
        alert("Please enter Y or N.")
        return;
    }

    //LowerLeters
    var lowerPrompt = prompt("Include lowercase letters?");
    if (lowerPrompt === "Y") {
        var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
        passwordString = lowerLetters + passwordString;
    } else if (lowerPrompt === "N") {
        
    } else {
        alert("Please enter Y or N.")
        return;
    }

    //Numbers
    var numberPrompt = prompt("Include numbers? Y or N");
    if (numberPrompt === "Y") {
        var numberList = '0123456789';
        passwordString = numberList + passwordString;
    } else if (numberPrompt === "N") {
        
    } else {
        alert("Please enter Y or N.")
        return;
    }

    //Symbols
    var symbolPrompt = prompt("Include symbols? Y or N");
    if (symbolPrompt === "Y") {
        var symbolList = '!@#$%^&*()';
        passwordString = symbolList + passwordString; 
    } else if (symbolPrompt === "N") {
        
    } else {
        alert("Please enter Y or N.")
        return;
    }

    //All Prompts = FALSE
    if (upperPrompt === "N" && lowerPrompt === "N" && numberPrompt === "N" && symbolPrompt === "N") {
        alert("Try Again.\nPlease click OK to at least one of the following criteria:\n-Uppercase Letters\n-Lowercase Letters\n-Numbers\n-Symbols");
        return;
    }

    //Confirm Criteria & GENERATE
    var confirmPrompt = prompt("Please enter Y to confirm the following selections: \n" + 
        "Length: " + length + "\n" +
        "Uppercase: " + upperPrompt + "\n" +
        "Lowercase: " + lowerPrompt + "\n" +
        "Numbers: " + numberPrompt + "\n" +
        "Symbols: " + symbolPrompt);
    if (confirmPrompt === "Y") {
        console.log(passwordString); // GENERATE PASSWORD HERE
        console.log(getrandom());
    } else {
        alert ("Please re-select criteria to meet your preferences.");
        return;
    }  

    function getrandom() {
        return passwordString[Math.floor(Math.random() * passwordString.length)];
    } 

    

}

// for (var i = 0; i < length; i+= passwordString.length);



