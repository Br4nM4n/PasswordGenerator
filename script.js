// Assignment Code
var generateBtn = document.querySelector("#generate");

var LowerCase = ( "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");     
var UpperCase = ( "A", "B", "C", "D", "E", "F", "G", "H", "I", "j", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"); 
var specialChar=( "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "/" );
var NumericChar=( "1", "2", "3", "4", "5", "6", "7", "8", "9");
var charArr = ( LowerCase, UpperCase, specialChar, NumericChar);


        
       
    
// Write password to the #password input 
function writePassword() {
  var characterCount = prompt ("How many characters would you like your password to to contain? (enter a number 8-128):");
  while (characterCount < 8 || characterCount > 128){
   characterCount = prompt ("How many characters would you like your password to to contain? (enter a number 8-128):"); 
  
  if (characterCount > 8 || characterCount < 128) {
  var confirmLower   = confirm ("Click OK to confirm the use of lowercase letters.");
      console.log(confirmLower)
  var confirmUpper   = confirm ("Click OK to confirm the use of uppercase letters.");
      console.log(confirmUpper)
  var confirmSpeChar = confirm ("Click OK to confirm the use of special character.");
      console.log(confirmSpeChar)
  var confirmNumeric = confirm ("Click OK to confirm the use of numeric characters.");
      console.log(confirmNumeric)
 }
}
for (confirmLower == true || confirmUpper == true || confirmSpeChar == true || confirmNumeric == true) {



}    
   
  var password = generatePassword(characterCount)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);
 