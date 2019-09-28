
   var upperCase = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
   var lowerCase = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
   var numbers = ["0","1","2","3","4","5","6","7","8","9"]
   var special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","\","|","]

    
    var arr = []
    
    var passTxtbox = document.getElementById("#password");
    var clipBoard = document.getElementById("#copy");
    var finalPass = "";
    
    
    var generatePass = function() {
    alert("password must contain between 8 to 128 characters");
    var passwordLength = prompt("How many characters would you like?");
    
    if (passwordLength < 8) 
    alert("It has to be at least 8 characters!");
    if (passwordLength > 128)
    alert("No more than 128 characters");
    
    
    var upperLength = confirm("Woukd you like upper case letters?");
    
    var lowerLength = confirm("Would you like lower case letters?");
    
    var numbersLength = confirm("Would you like numbers?");
    
    var specialLength = confirm("Would you like special characters?");
    console.log(upperLength)

    console.log(arr)
    if (upperLength) {
    arr = arr.concat(upperCase)
    }
    if (lowerLength) {
    arr = arr.concat(lowerCase)
    }
    if (numbersLength) {
    arr = arr.concat(numbers)
    }
    if (specialLength) {
    arr = arr.concat(special)
    }
    console.log(arr)
    for(var i = 0; i < passwordLength; i++) {
        var x = Math.floor(Math.random()*arr.length);
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
    
    
    
    
    
        
       