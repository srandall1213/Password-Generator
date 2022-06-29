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
        var includeUpperCase = prompt("Please enter Y to at least one of the following criteria.\nInclude uppercase letters? Y or N");
        if (includeUpperCase = "Y" || "N") {
             var includeLowerCase = prompt("Include lowercase letters? Y or N");
                if(includeLowerCase = "Y" || "N") {
                    var includeNumbers = prompt("Include numbers? Y or N");
                    if (includeNumbers = "Y" || "N") {
                        var includeSymbols = prompt("Include symbols? Y or N");
                        if(includeSymbols = "Y" || "N") {

                            var calculatePassword = function () {
                                if (clickGenerate == Range[8,128] && includeUpperCase == "Y" && includeLowerCase == "Y" && includeNumbers == "Y" && includeSymbols == "Y");
                                var yestoEverything = "GENERATE EQUATION INTO BOX BELOW"
                                    alert(yestoEverything);
                                
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
    }


