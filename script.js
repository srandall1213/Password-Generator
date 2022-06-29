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

//MY CODE STARTS HERE

function generatePassword () {
    var clickGenerate = prompt("Please enter a password length between 8-128 characters.");
    if (clickGenerate >= 8 && clickGenerate <= 128) {
        var includeUpperCase = prompt("Please enter Y to at least one of the following criteria.\n\nInclude uppercase letters? Y or N");
        if (includeUpperCase === "Y" || includeUpperCase === "N") {
             var includeLowerCase = prompt("Include lowercase letters? Y or N");
                if(includeLowerCase === "Y" || includeLowerCase === "N") {
                    var includeNumbers = prompt("Include numbers? Y or N");
                    if (includeNumbers === "Y" || includeNumbers === "N") {
                        var includeSymbols = prompt("Include symbols? Y or N");
                        if(includeSymbols === "Y" || includeSymbols === "N") {

                            var calculatePassword = function () {
                                if (includeUpperCase === "Y" && includeLowerCase === "Y" && includeNumbers === "Y" && includeSymbols === "Y") {
                                    var yestoEverything = "GENERATE EQUATION INTO BOX BELOW";
                                    alert(yestoEverything);
                                } else if (includeUpperCase === "N" && includeLowerCase === "N" && includeNumbers === "N" && includeSymbols === "N") {
                                    alert("Please choose Y to at least one of the following criteria:\n-Uppercase Letters\n-Lowercase Letters\n-Numbers\n-Symbols")
                                }

                                var length = clickGenerate;
                                var hasUpper = includeUpperCase === "Y";
                                var hasLower = includeLowerCase === "Y";
                                var hasNumber = includeNumbers === "Y";
                                var hasSymbol = includeSymbols === "Y";
                                alert(hasUpper); //returns false


                            }
                            calculatePassword ();


                        } else {
                            alert("Please enter Y or N.")
                        }
                    } else {
                        alert("Please enter Y or N.")
                    }
                } else {
                    alert("Please enter Y or N.")
                }    
        } else {
            alert("Please enter Y or N.");
        }
    } else {
        alert("Please enter a number between 8-128.")
    }
return "Generated password variable will go here!";
}
generatePassword()










//GET RANDOM FUNCTION VARIABLE

var randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

//GET RANDOM FUNCTIONS - http://www.net-comber.com/charset.html

function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); //add random number between 1-26 (# letters in alphabet) to 97 which is the beginning of the lowercase letter range in CharCode
}

function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random () * 26) + 65) //add random number between 1-26 (# letters in alphabet) to 65 which is the beginning of the uppercase letter range in CharCode
}

function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random () * 10) + 48) //add random number between 0-9 to 48 which is the beginning of the number range in CharCode
}

function getRandomSymbol () {
    var symbols = '!@#$%^&*';
    return symbols[Math.floor(Math.random() * symbols.length)];
}



