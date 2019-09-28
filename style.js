var passWords = {
"upperCase": ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"],
"lowerCase": ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"],
"numbers": ["0","1","2","3","4","5","6","7","8","9"],
"special": ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","\","|","],
} ;

var arr = [];


var finalPass = "";


var generatePass = function() {
    var finalPass="";
    password.innerHTML = "";
   
alert("password must contain between 8 to 128 characters");
var passwordLength = prompt("How many characters would you like?");

if (passwordLength < 8) 
return alert("It has to be at least 8 characters!");
if (passwordLength > 128)
return alert("No more than 128 characters");


var upperCase = confirm("Woukd you like upper case letters?");

var lowerCase = confirm("Would you like lower case letters?");

var numbers = confirm("Would you like numbers?");

var special = confirm("Would you like special characters?");


if (upperCase === true && lowerCase === true && numbers === true && special === true) {
    var arr = passWords.upperCase.concat(passWords.lowerCase).concat(passWords.numbers).concat(passWords.special);
} else if (upperCase === true && lowerCase === true && numbers === true && special === false) {
    var arr = passWords.upperCase.concat(passWords.lowerCase).concat(passWords.numbers);
} else if ( upperCase === true && lowerCase === true && numbers === false && special === true) {
var arr = passWords.upperCase.concat(passWords.lowerCase).concat(passWords.special);
} else if (upperCase === true && lowerCase === false && numbers === true && special === true) {
    var arr = passwords.upperCase.concat(passWords.numbers).concat(passWords.special);
}else if (upperCase === false && lowerCase === true && numbers === true && special === true) {
    var arr = passWords.lowerCase.concat(passWords.numbers).concat(passWords.special);
} else if (upperCase === true && lowerCase === true && numbers === false && special === false) {
    var arr = passWords.upperCase.concat(passWords.lowerCase);
} else if (upperCase === true && lowerCase === false && numbers === false && special === true) {
    var arr = passWords.upperCase.concat(passWords.special);
} else if (upperCase === false && lowerCase === false && numbers === true && special === true) {
    var arr = passWords.numbers.concat(passWords.special);
} else if (upperCase === false && lowerCase === true && numbers === true && special === false) {
    var arr = passWords.lowerCase.concat(passWords.numbers);
} else if (upperCase === true && lowerCase === false && numbers === false && special === false) {
    var arr = passWords.upperCase;
} else if (upperCase === false && lowerCase === true && numbers === false && special === false) {
    var arr = passWords.lowerCase;
} else if (upperCase === false && lowerCase === false && numbers === true && special === false) {
    var arr = passWords.numbers;
} else if (upperCase === true && lowerCase === false && numbers === true && special === false) {
    var arr = passWords.upperCase.concat(passWords.numbers);
} else if (upperCase === false && lowerCase === true && numbers === false && special === true) {
        var arr = passWords.lowerCase.concat(passWords.special);
} else if (upperCase === false && lowerCase === false && numbers === false && special === true) {
    var arr = passWords.special;
} else if (upperCase === false && lowerCase === false && numbers === false && special === false) {
    return alert("Error!");
}


for(var i = 0; i < passwordLength; i++) {
        var x = [Math.floor(Math.random()*arr.length)];
        finalPass += arr[x];
} password.innerHTML = finalPass;
}

var myfunction = function() {
    var clipBoard = document.getElementById("password");
    clipBoard.select();
    clipBoard.setSelectionRange(0,99999);
    document.execCommand("copy");
    alert("Copied the text: " + clipBoard.value);
} 






    
   