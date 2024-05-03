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
    // element.textContent = "Hello " + name + "!";
    //I like backticks for string interpolation same as above but more readable
    element.textContent = `Hello ${name}!`;
    //i could add console.log here to see what is happening remove it for production
    console.log("Hello " + name + "!");
}

//I can call this function with a parameter
// const myOutputElement = document.getElementById("output-fun-id"); //typical juxtaposition of id naming error
const myOutputElement = document.getElementById("fun-output-id");

greetToElement("Valdis", myOutputElement);

//i could call this function with different parameters
//I can get element on the fly by calling document.getElementById("fun-output-id")
//I do not save the element in a variable but just pass it directly to function
greetToElement("Rūta", document.getElementById("fun-output-id-2"));

//functions can also return values
//let's make a function that takes a name and returns a greeting string
function greetString(name) {
    //so this is more pure function that only returns a value
    //it does not have any side effects - meaning it does not change anything outside of itself
    return `Hello ${name}!`; //so string interpolation is very handy
}

//now let's make a function that takes a greeting and element and assigns the greeting to the element
//this is more flexible because the greeting can be anything
function greetStringToElement(greeting, element) {
    element.textContent += greeting; //appending NOT replacing the text
    //above is same as element.textContent = element.textContent + greeting;
    console.log(greeting);
}

//I can call greetString and pass the result to greetStringToElement
const myGreeting = greetString("Spring");
greetStringToElement(myGreeting, myOutputElement);