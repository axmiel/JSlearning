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
let name = 'artur';
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
//individual items from an arrays can be called upon by suffixing the name of the array with square brackets
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
//pop() - removes the last item from the array. the popped value can be assign to a variable and reused in the code
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
//like arrays, objects only references locations in the memory
//objects are created with key:value pairs and don't use indexes, to call on a value, you would use a key instead
//keys must be unique, if the same key is mentioned multiple times, then upon calling it, the latest assigned value will be used
const obj1 = {
    string1 : 'value1',
    string2 : 'value2',
    num : 5,
    num : 2,
    bool1 : true,
    arr : arr,
//keys can also be nested within quotation marks
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



//    ##########################################################
//    lesson 5 - function expression and declaration
//    ##########################################################
alert("lesson 5 - function expression and declaration");