//we will run only once DOM is fully loaded

console.log("Started our script!");

// function mainFunction() {
//     //here we can safely access the DOM
//     console.log("mainFunction Also DOM fully loaded and parsed");
// }

// //we can supply a named function to the event listener and it will be called when the event happens
// document.addEventListener("DOMContentLoaded", mainFunction); //note there is no () after mainFunction
// //we just supplied the name of the function - we do not want to call it here - we want the event listener to call it

// //alternatively we can also use an anonymous function - here arrow function
// document.addEventListener("DOMContentLoaded", (event) => {
//     //here we can safely access the DOM
//     console.log("DOM fully loaded and parsed");
//     console.log(`Event type is ${event.type}`); //event is a parameter that is passed to the function
//   });

//so often we will not need a specific function to be called when the DOM is loaded
//instead we use an anonymous function or an arrow function

//arrow function is a shorthand for a function
//it is a new feature in ES6 - since around 2015 - so every modern browser supports it

const inputElement = document.getElementById("input-change");
const inputElement2 = document.getElementById("input-change-2");
//lets get our output element
const outputElement = document.getElementById("input-output-id");

//we will attach an event listener to the input element
//we want to listen for the input event
//we will use an arrow function to handle the event
// inputElement.addEventListener("input", (event) => {
//     //here we can safely access the DOM
//     console.log("Input event happened");
//     console.log(`Event type is ${event.type}`); //event is a parameter that is passed to the function
//     //we can get the value of the input element
//     console.log(`Input value is ${inputElement.value}`); //this is limited to the value at the time of the event
//     //more flexible approach is to get the value from the event object
//     //we can also get the value from the event object
//     console.log(`Input value from event is ${event.target.value}`);
//   });

//lets make a generic function that will output the event type and the value of the input element
function logSomeEvent(event) {
    console.log(`Event type is ${event.type}`);
    console.log(`Input value from event is ${event.target.value}`);
    //lets output the value to the output element
    //using backticks and ${} we can easily combine strings and variables
    outputElement.textContent = `Combined value is ${inputElement.value} ${inputElement2.value}`;
}  

//we can reuse the same function for multiple event listeners

inputElement.addEventListener("input", logSomeEvent);
inputElement2.addEventListener("input", logSomeEvent);

//so we reuse same function for multiple event listeners across multiple elements
//so far we used input event https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event

//we can also use change event https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
//difference is that input event triggers immediately when the value changes
//change event triggers when the value changes and the input element loses focus



//lets make a separate function for the change event
function logChangeEvent(event) {
    console.log("Calling logChangeEvent");
    console.log(`Event type is ${event.type}`);
    console.log(`Input value from event is ${event.target.value}`);
}

inputElement.addEventListener("change", logChangeEvent);
inputElement2.addEventListener("change", logChangeEvent);

//let's get number input elements
const numberInputElement1 = document.getElementById("number-1");
const numberInputElement2 = document.getElementById("number-2");
//now output element
const outputNumberElement = document.getElementById("number-output");

//we will use the input event for the number input elements and display the sum in the output element
//we will create a function that will handle the input event
function handleNumberInput(event) {
    console.log("Calling handleNumberInput");
    console.log(`Event type is ${event.type}`);
    console.log(`Input value from event is ${event.target.value}`);
    //number input needs to be converted to a number
    const concatenation = numberInputElement1.value + numberInputElement2.value;
    //we will get the values from the number input elements
    const number1 = parseFloat(numberInputElement1.value);
    const number2 = parseFloat(numberInputElement2.value);
    //we will calculate the sum
    const sum = number1 + number2;
    
    //we will output the sum to the output element
    outputNumberElement.value = sum; //input elements have value property
    //we can also output the concatenation as text content to the output element
    outputElement.textContent = `Concatenation is ${concatenation} and sum is ${sum}`;
}

//now let's apply a listener to both number input elements meaning whenever the value changes the function will be called
numberInputElement1.addEventListener("input", handleNumberInput);
numberInputElement2.addEventListener("input", handleNumberInput);

console.log("Our script is done ready to handle events!");