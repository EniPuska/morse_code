
function translate(form) {
letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .,?:-!1234567890";
morse = new Array(
".-","-...","-.-.","-..",".","..-.",
"--.","....","..",".---","-.-",".-..",
"--","-.","---",".--.","--.-",".-.",
"...","-","..-","...-",".--","-..-",
"-.--","--..",".-","-...","-.-.","-..",
".","..-.","--.","....","..",".---",
"-.-",".-..","--","-.","---",".--.",
"--.-",".-.","...","-","..-","...-",
".--","-..-","-.--","--.."," ",".-.-.-",
"--..--","..--..","---...","-....-","!",".----","..---", "...--","....-", 
".....","-....","--...","---..", 
"----.","-----");

form.output.value = "";
var input = form.input.value;
output = "";
for(count = 0; count < input.length; count++) {
daChar = input.charAt(count);
for (i = 0; i < letters.length; i++) {
if (daChar == letters.charAt(i)) {
output += morse[i] + " ";
break;
      }
   }
}
form.output.value = output;
}