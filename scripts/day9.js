//by default Javascript runs top to bottom, but we can change the order of execution by using functions

console.log("Starting our script"); //console.log is built in function in JS that prints to console
//console is generally seen in browser's developer tools - console tab
//console.log is used for debugging purposes - we should comment or delete console.log statements before deploying our code
//print current date and time
console.log(new Date());

let mydate = document.getElementById("creation-date");
mydate.style.backgroundColor="red";



console.log("Ending our script");