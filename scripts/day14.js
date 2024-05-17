console.log("Let's add and remove some elements upon user interaction!");

//first we will create functions that add and remove elements
//first function will add an element given a container and also the tag name, also classes, id, and text content
//finally we will have an optional bgColor parameter to change background color directly

function addElement(container, tagName, classes, id, textContent="", bgColor=null) {
    console.log(`Calling addElement with tag name ${tagName} and text content ${textContent}`);
    //we will create a new element
    const newElement = document.createElement(tagName); //so tagName should be found in MDN HTML element reference
    //we will set the classes
    newElement.classList.add(...classes);
    //we will set the id
    newElement.id = id;
    //we will set the text content
    newElement.textContent = textContent; //we could have made a paragraph element and set its text content
    //we will set the background color if it is provided
    if (bgColor) {
        newElement.style.backgroundColor = bgColor;
    }
    //we will append the new element to the container
    container.appendChild(newElement);
}

//let's get our container where we will be adding elements
//its id is element-container-1
const container = document.querySelector("#element-container-1"); //alternatively we could use getElementById("element-container-1")
//more on querySelector: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//querySelector works similar to CSS selectors, so it will return the first element that matches the selector
// # stands for id, . stands for class, and nothing stands for tag name

//let's add an element to the container
// addElement(container, "div", ["boxy", "cool"], "element-1", "This is the first element");

//let's get the button that will add elements
const addButton = document.querySelector("#add-element-button"); //again you need hash if you are selecting by id

//let's use a global counter to keep track of the number of elements
let elementCounter = 0; //this is globally accessible again strive to minimize global variables

//let's add an event listener to the button
addButton.addEventListener("click", function() {
    //we will add an element to the container
    elementCounter++;
    //depending on elementCounter being even or odd we will supply custom class even or odd
    const customClass = elementCounter % 2 === 0 ? "even" : "odd";
    //I could have done this with if else but I wanted to show you the ternary operator
    addElement(container, "div", ["boxy", customClass], `element-${elementCounter}`, "This is the element No. " + elementCounter);
});