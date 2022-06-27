// Assignment Code - GIVEN
var generateBtn = document.querySelector("#generate"); //GIVEN
var characterLengthEl = document.getElementById ('characterLengthNumber');
var includeUpperCaseEl = document.getElementById ('includeUpperCase');
var includeLowerCaseEl = document.getElementById ('includeLowerCase');
var includeNumbersEl = document.getElementById ('includeNumbers');
var includeSymbolsEl = document.getElementById ('includeSymbols');
var passWORD = document.getElementById('password');

var upperCaseCharCodes = arrayFromLowToHigh(97, 122)
var lowerCaseCharCodes = arrayFromLowToHigh(65, 90)
var numberCharCodes = arrayFromLowToHigh(48, 57)
var symbolCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))



// Write password to the #password input - GIVEN
function writePassword() { //GIVEN
  var charLength = characterLengthEl.value;
  var includeUpp = includeUpperCaseEl.checked;
  var includeLow = includeLowerCaseEl.checked;
  var includeNum = includeNumbersEl.checked;
  var includeSym = includeSymbolsEl.checked;
  var password = generatePassword(charLength, includeUpp, includeLow, includeNum, includeSym); //GIVEN, added variables
  var passwordText = document.querySelector("#password"); //GIVEN
  passwordText.value = password; //GIVEN
}

function generatePassword(charLength, includeUpp, includeLow, includeNum, includeSym) {
  var charCodes = lowerCaseCharCodes //default lowercase then concat if includes one of the below criteria
  if (includeUpp) charCodes = charCodes.concat(upperCaseCharCodes)
  if (includeLow) charCodes = charCodes.concat(lowerCaseCharCodes)
  if (includeNum) charCodes = charCodes.concat(numberCharCodes)
  if (includeSym) charCodes = charCodes.concat(symbolCharCodes)

  var passwordCharacters = []
  for(let i = 0; i < charLength; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))

  }
  return passwordCharacters.join('')
}

//generates an array from our low number to our high number
function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
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

















