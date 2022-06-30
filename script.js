// Assignment Code
var generateBtn = document.querySelector("#generate"); //generate id is in the generate button in HTML

// Write password to the #password input
function writePassword() {  //what does this mean??? 
  var password = generatePassword(); //is it correct to write my whole function under generatePassword???
  var passwordText = document.querySelector("#password"); //password id is in the password textbox

  passwordText.value = password; //What does this mean???
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)  //do I add () by writePassword?? what does writePassword do right here??? 
    
//MY CODE 
function generatePassword () {
    var includeLength = parseInt(prompt("Please enter a password length between 8-128 characters."));
    if (includeLength >= 8 && includeLength <= 128) {
        var includeUpperCase = confirm("Include uppercase letters?\n(Ok = Yes & Cancel = No)");
        if (includeUpperCase == true || includeUpperCase == false) {
            var includeLowerCase = confirm("Include lowercase letters?");
            if(includeLowerCase == true || includeLowerCase == false) {
                var includeNumbers = confirm("Include numbers?");
                if (includeNumbers == true || includeNumbers == false) {
                    var includeSymbols = confirm("Include symbols?");
                    if(includeSymbols == true || includeSymbols == false) {  
                        var youSelected = confirm(
                            "Please confirm the following selections: \n" + 
                            "Length: " + includeLength + "\n" +
                            "Uppercase: " + includeUpperCase + "\n" +
                            "Lowercase: " + includeLowerCase + "\n" +
                            "Numbers: " + includeNumbers + "\n" +
                            "Symbols: " + includeSymbols
                            );
                        if(youSelected == true) { //STOPS WORKING RIGHT HERE!!!!!!!!!!!!!!!!

                            //Get Random Function 
                            var randomFunctions = {
                                lower: randomLower,
                                upper: randomUpper,
                                number: randomNumber,
                                symbol: randomSymbol,
                            };
                        
                            //Random Functions 
                            function randomUpper () {
                                return String.fromCharCode(Math.floor(Math.random () * 26) + 65); //add random number between 1-26 (# letters in alphabet) to 65 which is the beginning of the uppercase letter range in CharCode
                            }
                            
                            function randomLower () {
                                return String.fromCharCode(Math.floor(Math.random() * 26) + 97); //add random number between 1-26 (# letters in alphabet) to 97 which is the beginning of the lowercase letter range in CharCode
                            }
                            
                            function randomNumber () {
                                return String.fromCharCode(Math.floor(Math.random () * 10) + 48); //add random number between 0-9 to 48 which is the beginning of the number range in CharCode
                            }
                            
                            function randomSymbol () {
                                var symbols = '!@#$%^&*';
                                return symbols[Math.floor(Math.random() * symbols.length)];
                            }
                            
                            
                            //Acutal Generating
                            function attemptGenerate(includeUpperCase, includeLowerCase, includeNumbers, includeSymbols, includeLength) { //do I need my variables listed here??

                                var attemptedPassword = '';

                                var typesCount = includeUpperCase + includeLowerCase + includeNumbers + includeSymbols; //maybe my variables don't work with typesCount??

                                var typesArray = [{includeUpperCase}, {includeLowerCase}, {includeNumbers}, {includeSymbols}].filter //filter out falses

                                (
                                    item => Object.values(item)[0] //whatever is false is now filtered out of the array
                                );

                                if(typesCount === 0) { //do I set this to 0 or false? this code sends an alert if false is chosen for all criteria
                                    return alert("Try Again.\nPlease click OK to at least one of the following criteria:\n-Uppercase Letters\n-Lowercase Letters\n-Numbers\n-Symbols");
                                }

                                for (var i = 0; i < includeLength; i += typesCount) { //looping over the chosen length with random functions
                                    typesArray.forEach(type => {
                                        var functionName = Object.keys(type)[0];
                                        attemptedPassword += randomFunctions[functionName]();
                                    });
                                }

                                var finalPassword = attemptedPassword;
                                return finalPassword; //do I return the password here?
                            }
                            attemptGenerate(); //do I call the function here??

                        } else {
                            alert("Please re-enter criteria to meet your preferences.");
                        }
                    } 
                } 
            }    
        }        
    } else {
        alert("Please enter a number between 8-128.");
    }
}