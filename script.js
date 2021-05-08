// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var specialchar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']
var numbers = ['0','1','2','3','4',"5",'6','7','8','9']
var uppercasechar = ['A','B','C','D','E',"F",'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercasechar = ['a','b','c','d','e',"f",'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var allpossiblechar = [] 
var generatedPassword = ""
function generatePassword() {
var passwordlength = prompt("how long would you like your password to be?") 
var confrimspecialcharater = confirm ("would you like to include special characters?")
var confrimsuppercasecharater = confirm ("would you like to include uppercase characters?")
var confrimslowercasecharater = confirm ("would you like to include lowercase characters?")
var confrimsnumbers = confirm ("would you like to include numbers?")
if (confrimspecialcharater){
  generatedPassword = generatedPassword + specialchar[Math.floor(Math.random() * specialchar.length)]
  allpossiblechar = allpossiblechar.concat(specialchar)
}
if (confrimsuppercasecharater){
  generatedPassword = generatedPassword + uppercasechar[Math.floor(Math.random() * uppercasechar.length)]
  allpossiblechar = allpossiblechar.concat(uppercasechar)
}
if (confrimslowercasecharater){
  generatedPassword = generatedPassword + lowercasechar[Math.floor(Math.random() * lowercasechar.length)]
  allpossiblechar = allpossiblechar.concat(lowercasechar)
} 
if (confrimsnumbers){
  generatedPassword = generatedPassword + numbers[Math.floor(Math.random() * numbers.length)]
  allpossiblechar = allpossiblechar.concat(numbers)
  console.log(allpossiblechar)
}
var neededchar = passwordlength - generatedPassword.length
console.log(neededchar)
 for (let i = 0; i < neededchar; i++) {
  generatedPassword = generatedPassword + allpossiblechar[Math.floor(Math.random() * allpossiblechar.length)] 

 } 
 console.log (generatedPassword)
 return generatedPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
