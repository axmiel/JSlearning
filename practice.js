/*
//   ##################################
//   lesson 1 - console logs, alerts, etc
//   ####################################
alert("lesson 1 - console logs, alerts, etc");
//console.log() prints out output in the browser console
console.log("lesson 1");
window.console.log("window is an object with many properties");
//alert() method created a pop-up window in the browser
window.alert("alerts can be displayed using the window object");
//warn() method prints a warning in the browser console
console.warn("code will stop executing upon reaching an alert and will only continue once the alert has been accepted");

console.log("hello");
alert("hello");
console.error("test error");
alert("error");
//this is a comment and the line is omitted
console.warn("omitted one line of code"); 
console.info("this is my first JS project");

//blocks of code can be wrapped in a block using {}
{
    console.warn("block starts here: this is a block of code");
    console.log("blocks are used to group related code together");
    console.log("still the same block -")
}
*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/*
//   ##################################
//   lesson 2 - variables (let, const) and prompts
//   ####################################
alert("lesson 2 - variables (let, const) and prompts");
alert("prompt() displays an alert that takes in user input");
console.log("prompt() input can be stored in a variable");
let is used to declare mutable variables
let name = prompt("this is a prompt(), the input will be assigned to a variable 'name'");
let hour = 12;
let minute = 30;
//strings can be concatenated together, variables also. 
//if non-string variables are concatenated with string variables, their type will be temporarily changed to string
console.log("user: " + name + " entered the site at " + hour + ":" + minute);
//we can check the type of any variable by using typeof method
console.log("type of the 'hour' variable is " + typeof hour);
//variables declared with the let keyword are mutable
hour = 14;
minute = 45;
console.log("the same variables minute and hour have been changed to " 
            + hour + " and " + minute);
//const are used to declare unmutable variables, these variables cannot be changed
const constantVariable = "constantVariable";
console.log("the " + constantVariable + " is a constant variable, meaning it's not mutable");
console.log("trying to assign a different value to the constant variable will throw the following error");
console.error("test test Uncaught TypeError: Assignment to constant variable.");
//the naming convention when declaring new variables is to use camelCase
//variable names are case sensitive so newVariable =/= NewVariable, they must be unique and meaningful (semantic) - reserved words are not allowed 
//variable names can only begin with a letter, a dollar sign $ or an underscore _
//numbers can be used but not as the first character in the variable name
*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/*
//    #####################################
//    lesson 3 - assignment and comparison operators - applying logic
//    #####################################
alert("lesson 3 - assignment and comparison operators - applying logic");
//JS uses the usual arithmetic operators + - * and /
let valueA = 3;
let valueB = 9;
console.log("addition A+B", valueA + valueB);
console.log("subtraction B-A", valueB - valueA);
console.log("multiplication A*B", valueA * valueB);
console.log("division B/A", valueB / valueA);

//string concatenation is interesting when combining string type with number type
let valueC = '3';
console.log("valueA type number, valueC type string");
console.log("valueA + valueC = ", valueA + valueC);
console.log("valueA + valueA + valueA + valueA + valueC = ", valueA + valueA + valueA + valueA + valueC);
//as in the example above, strings and numbers get concatenated as if the number were a string
//unless multiple number type variables are listed first, then they get added together and then concatenated with the string variable

//like other language, shorthand assignment operators can also be used
valueA += 3;
console.log("valueA += 3", valueA);
valueB *= 3;
console.log("valueB *= 3", valueB);
valueB /= 3;
console.log("valueB /= 3", valueB);
valueA -= 3;
console.log("valueA -= 3", valueA);

//arithmetic operators allow for implementing logic into the code and always return a boolean value
//A == B; checks if A is equal to B - performs type conversion if necessary
//A === B; checks if A is equal to B - doesn't perform type conversion
//A != B; checks if A is NOT equal to B
//> < =< >= work as they do in maths lol
let boo = (3 === '3');
console.log(boo);
*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/*
//    ######################################################
//    lesson 4 - Arrays and Objects Storing values within object
//    ######################################################
alert("lesson 4 - Arrays and Objects Storing values within object");
//arrays are ordered collections of comma-separated values contained between square brackets
const arr = ['one', true, 3, [1, 2, 3], 5];
console.log(arr);
//individual items from an array can be called upon by suffixing the name of the array with square brackets
//and specifying the index number of the item from the array. the computers count from 0, so the first item in array has index 0
console.log(arr[3]);

//the items can be overriden by calling on the array and specifying the index number of the item to be overwritten
arr[4] = 20;
console.log(arr);

//new items can be added to the array by calling the array with a desired index number and assigning it a value
//if there is a gap between values, the unassigned indexes will show as 'empty', and when empty items are called they'll show as 'undefined'
arr[8] = "lol now what";
console.log(arr[6]);

//arrays come equipped with a number of methods, e.g. length - checks the length of the array
console.log("array length: ", arr.length); 
//push() - adds a new item to the end of the array
arr.push('last item');
//pop() - removes the last item from the array. the popped value can be assigned to a variable and reused in the code
let val = arr.pop();
console.log("removed: ", val);
//unshift() - adds new value to the start
arr.unshift('new start');
//shift() - will remove the first value from the array, it can also be assigned to a variable like pop()
val = arr.shift();
console.log(val);

//arrays only point to a location in memory so even though it's declared with const, the values within the array can be updated
//if another array was created and assigned with the same values as the original array, the same values would be updated as well
const arr2 = arr;
arr2[3] = 'NEW VALUE TEST';
//even though the value has been updated for arr2 specificly, both arrays will be updated as they both reference a value
//at the same location in the memory
console.log(arr);

//OBJECTS are another way of storing multiple values in the same variable, they are unordered and contained within {} squiggly brackets
//like arrays, objects only reference locations in the memory
//objects are created with key:value pairs and don't use indexes, to call on a value, you would use a key instead
//keys must be unique, if the same key is mentioned multiple times, then upon calling it, the latest assigned value will be used
const obj1 = {
    string1 : 'value1',
    string2 : 'value2',
    num : 5,
    num : 2,
    bool1 : true,
    arr : arr,
//keys must be nested within quotation marks if individual words are not joined with an underscore
    'another key' : 'this is another key'
};
//specific items within objects can be called in two ways:
//appending the name of the object with .key - keys nested within quotation marks cannot be called on this way
console.log(obj1.string1);
//or specifying the key within square brackets and quotation marks
console.log(obj1['string2']);

console.log(obj1.arr);
console.log(obj1);
*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/*
//    ##########################################################
//    lesson 5 - function expression and declaration
//    ##########################################################
alert("lesson 5 - function expression and declaration");

//Two ways to create functions - function expressions
//                              - function declaration
//When a block of code is run in a function it is not complete until it returns a value


//FUNCTION EXPRESSIONS
//- similar to creating variables, the meta is to use const to ensure function is immutable
//- function expressions do not get hoisted - function expression can only be invoked once it has been created
//- trying to invoke a function expression before it was created results in an error
const funExpression1 = function(arg1, arg2){
    console.log("the sum of numbers " + arg1 + " and " + arg2 + " is: " + (arg1 + arg2))
}
funExpression1(3, 5);

//the above function expression can be re-written using an arrow format
const arrowFun = (arg1, arg2) => {
    console.log("arrow function ", arg1, " + ", arg2, " = ", (arg1 + arg2))
}
arrowFun(1, 2);

//and even shorter arrow format
const shorterArrowFun = (arg1) => console.log("shorter arrow function with argument " + arg1);
shorterArrowFun('"hello"');


//function expressions can be invoked as soon as they are created
//these are called IIFE (immediately invoked function expressions)
//IIFE functions are single-use only - cannot be reused later in the code
(function(a, b){
    console.log('classic IIFE with args: ', a, b)
})('arg1', 'arg2'); //once created add the (); at the end to immediately invoke 

//in arrow format
((arg1) => {
    console.log('arrow function IIFE with arg: ', arg1);
})('kek'); 

//in shorter arrow format
((poppy) => console.log('short arrow function IIFE', poppy))('poppy');



//FUNCTION DECLARATIONS
//- get hoisted to the top of their scope and can be called on ***before*** they were declared - above we invoke the function that is declared below

//the below line is calling a **declared** function
console.log(multiply(4, 8));

function multiply(arg1, arg2){
    return arg1 * arg2
}

*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/*
//    ######################################################
//    lesson 6 - Conditions, If statements and Switch Ternary Operator
//    ######################################################
alert("Lesson 6 - Conditions, If statements and Switch Ternary Operator");

//Conditions allow to apply logic to the code

//IF / ELSE IF / ELSE
//There is the classic if/else if/else statement that runs the code if the condition is met
let myValue = 3;
if (myValue == 1) {
    console.log('if condition is met: run this block')
} else if (myValue == 2) {
    console.log('else if condition is met: run this');
} else {
    console.log('neither conditions are met (covers all other scenarios): do this if all else fails');
}

//SWITCH STATEMENTS
//switch statements allow to check on various cases and see if a condition meets the criteria we're looking for

function checker(val) {
    let message;
    switch(val){
        case 0:
            message = val + (' meets the first criteria (0)');
            break;
        case 1:
            message = val + ' meets the second criteria (1)';
            break;
        case 2:
            message = ' meets the third criteria (2)';
            break;
        default:
            message = val + " doesn't meet the criteria";
    }
    return message;
}

console.log(checker(1));


//TERNARY OPERATOR
//The ternary operator let's us assign a variable based on predefined conditions
//It operates similiarly to how it does in Java
//const variableName = (condition) ? assignedIfTrue : assignedIfFalse;

const anotherVariable = (myValue > 2) ? 'statement is true' : 'statement is false';
console.log(anotherVariable);

*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/*
//    ######################################################
//    lesson 7 - Loops
//    ######################################################
alert('lesson 7 - Loops');

//Loops provide a way to run the code multiple times

//FOR LOOP
//The structure of the FOR loop is as below
//  for(expression 1; expression 2; expression 3) {
//      //code block to be executed with each iteration of the loop
//  }
console.log('this is an example for loop');
for(let i=0;i<5;i++) {
    console.log('loop iteration ' + i);
}

//for - keyword indicating the start of the loop
//expression 1 - optional, initialises a variable used in the loop before the loop starts (e.g. i = 0 - a counter variable)
//multiple values can be initiated within the first expression
console.log('this is an example for loop with multiple "first expressions" initialised');
for(let i = 0, myarr = [0, 1, 2, 3, 4]; i < myarr.length; i++) {
    console.log('the ' + i + ' item in myarr is ' + myarr[i]);
}


//if expression 1 is omitted, e.g. if using variables initiated before the loop
let counterVariable = 0;

console.log('counterVariable value: ' + counterVariable);

for(; counterVariable < 4; counterVariable++) {
    console.log('counterVariable initiad before the loop started ' + counterVariable);
}

console.log('need to be careful with using existing variables as they will get overwritten: ' + counterVariable);


//expression 2 - optional, usually used to evaluate the condition of the variable - if the expression returns true the loop will execute again, if false the loop ends
//if expression 2 is omitted then a break statement must be used within the loop, otherwise the loop would go on indefinitely 
console.log('loop with expression 2 skipped')
for(let i=0; ; i++) {
    console.log(i);
    if (i == 3) {
        break;
    }
}


//expression 3 - optional, usually use to increment the value of the initial variable, but can be used to do anything else
console.log('loop with expression 3 not being a steady increment');
for(let i = 20; i > 10; i -= 9){
    console.log(i);
}
//expression 3 can be omitted if there is a counter variable used within the loop
console.log('for loop with expressions 2 and 3 omitted');
for(let i=0; ;) {
    console.log(i);
    i++;
    if (i == 3) {
        console.log('loop terminates at i = ' + i);
        break;
    }
}


//WHILE LOOPS
//Execute the block of code as long as the condition is true
let anotherCounter = 0;

while(anotherCounter < 4) {
    console.log('iteration ' + anotherCounter + ' of the while loop');
    anotherCounter += 1;
}


//DO-WHILE LOOPS
//Execute a block of code once, then, if the 'while' condition is true, executes until the condition fails - if the 'while' condition fails immediately, stops executing
anotherCounter = 1;
do {
    console.log('do while loop execution ', anotherCounter);
    anotherCounter++;
}
while(anotherCounter < 1);


//Loops are useful for iterating through items in the arrays
const arr = ['Arthur', 'Phoebe', 'Cat', 1234, 12.3];

console.log('for loop iterating over the array items');
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]); //logs array item at index [i]
}

console.log('while loop iterating over the array items');
let i = 0;
while(i < arr.length) {
    console.log(arr[i]);
    i++;
}


//There is a specific method for looping items through an array - forEach()

//For value of array or string
let str = 'Arthur';
for(val of str) {
    console.log(val + " of str");
}

//For key in object
const obj = {firstName:'Arthur', lastName:'Guy', age:30, networth:0};
for(key in obj) {
    console.log(key, obj[key]);
}
*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



//    ######################################################
//    lesson 7 - Array methods
//    ######################################################
alert('lesson 7 - Array methods');
