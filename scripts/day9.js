//by default Javascript runs top to bottom, but we can change the order of execution by using functions

console.log("Starting our script"); //console.log is built in function in JS that prints to console
//console is generally seen in browser's developer tools - console tab
//console.log is used for debugging purposes - we should comment or delete console.log statements before deploying our code
//print current date and time
console.log(new Date());

//TODO talk about let and const
//let is used to declare variables that can be reassigned
//const is used to declare variables that cannot be reassigned
//old var is still there but let and const are preferred
//var is best avoided because it has some quirks

//good practice is to start defining variables at the top of the script
//also use const whenever possible then change to let if needed
//this is for bug prevention

//so = is assignment operator
const creatorElement = document.getElementById("creator");
//for longer variable names I am using camelCase longVariableName etc
//some languages like Python use snake_case long_variable_name etc
//just be consistent in your naming conventions
//also use descriptive names for variables
//for example x and y are good names for coordinates but not for other things

//let's change the background color of creatorElement
creatorElement.style.backgroundColor = "yellow"; //again this could have been done with CSS
//let's add the creator's name to the creatorElement
const firstName = "Valdis"; //imagine you get this name from some other source
const lastName = "Saulespurens";
//let's concatenate first and last name
const fullName = firstName + " " + lastName; //basic string concatenation

//Instead of concatenation we could use template strings
// creatorElement.textContent = "Created by " + fullName;
creatorElement.textContent = `Created by ${fullName}`;
//notice the backticks ` these are used for template strings
//useful when you have more complex strings to build


const myDate = document.getElementById("creation-date");
myDate.style.backgroundColor="aqua";

//let's update mydate textContent to current date and time
myDate.textContent = new Date();

//let's do some math
//first let's extract year from current date
const currentYear = new Date().getFullYear();
console.log("Current year is", currentYear);
//let's do some math what year will it be in 100 years
const futureYear = currentYear + 100;
console.log("Year in 100 years will be", futureYear);

//javascript is tricky with numbers so be careful
//for example something like "22" + 1 will give you "221" because JS will try to concatenate strings    
//if you want to add numbers you should convert strings to numbers first
//just like my youngest daughter said that 1 + 1 is 11 because she was thinking in terms of concatenation
console.log("22"+1); //this will give you "221"
console.log(parseInt("22")+1); //this will give you 23
console.log(22+1); //this will give you 23

//determining data types
//javascript is dynamically typed language so you don't have to specify data types
//but it is good to know what data types you are working with
//you can use typeof operator to determine data type
console.log("Data type of currentYear is", typeof currentYear);
console.log("Data type of fullName is", typeof fullName);


console.log("Ending our script");