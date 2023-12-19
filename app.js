/*//#### lesson 1 - console logs, alerts, etc####
console.log("lesson 1");
window.console.log("window is an object with many properties");
window.alert("alerts can be displayed using the window object");
console.warn("code will stop executing upon reaching an alert and will only continue once the alert has been accepted");

console.log("hello");
alert("hello");
console.error("test error");
//alert("error");
//this code is omitted
console.warn("omitted one line of code"); //prints out a warning in the console
console.info("this is my first JS project"); //prints out an information in the console

{
    console.warn("block starts here: this is a block of code");
    console.log("blocks are used to group related code together");
    console.log("still the same block -")
}
*/

//#### lesson 2 variables, consts & prompts####
alert("prompt() displays an alert that takes in user input");
console.log("prompt() input can be stored in a variable");
let name = prompt("this is a prompt(), the input will be assigned to a variable 'name'");
console.warn("user: " + name + " entered the site");

//let is used to declare mutable variables
//const is used to declare unmutable variables
