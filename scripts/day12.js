//let's explore Javascript functions
//functions are a way to group code together

//let's make a simple greeting that prints something fixed to console
function greet() {
    //so we have a way of grouping code together
    console.log("Hello there!");
    console.log("I hope you are having a great day!");
    //we can add as much code as we want here
    //still functions should be kept small and do one thing and do it well - this is a good practice
    //generally if your function is over one page long you should consider breaking it up
}

//in order to use a function I need to call it
greet();
// //I could call this function as many times as I want
// for (let i = 0; i < 5; i++) {
//     greet();
// }

//let's make a function that takes name as parameter and outputs a greeting
function greetWithName(name) {
    console.log("Hello " + name + "!");
    console.log("I hope you are having a great day!");
}

//I can call this function with a parameter
// greetWithName(); //well you did not give me a name so Javascript assigns undefined to name
//in many languages this would be an error but in Javascript it is not
greetWithName("Valdis");
greetWithName("Rūta");

//let's make a function that outputs a greeting into textContent of an element that is passed as a parameter
function greetToElement(name, element) {
    element.textContent = "Hello " + name + "!";
    //i could add console.log here to see what is happening remove it for production
    console.log("Hello " + name + "!");
}

//I can call this function with a parameter
// const myOutputElement = document.getElementById("output-fun-id"); //typical juxtaposition of id naming error
const myOutputElement = document.getElementById("fun-output-id");

greetToElement("Valdis", myOutputElement);