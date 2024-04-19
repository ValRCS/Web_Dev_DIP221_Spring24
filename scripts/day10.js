console.log("Day 10 - Conditionals");

const el = document.getElementById("output"); //so here I am using DOM API to get the element

el.style.borderWidth = "3px"; //here I am accesing style property of the element and changing 
//normally statically changing something through javascript is not much of a point since CSS could have done that

//here I am accesing textContent property of the element
//and changing the value of the textContent property
// el.textContent = 5 > 3;

//you should change textContent using textConent 
//innerHTML is used to change the HTML content of the element, very powerful but also very dangerous
//el.innerHTML = "<h2>Do not do this generally</h2><p>5 > 3: " + (5 > 3) + "</p><br>"; //this is not recommended because it is not safe as soon as you get some user inputs

let element = document.getElementById("comparison1");
element.textContent = 5 > 3; //so > is done first and then the result is assigned to textContent
element = document.getElementById("comparison2"); //reusing the same variable, can also lead to bugs
element.textContent = 5 < 3;
element = document.getElementById("comparison3");
element.textContent = 5 == 3;
element = document.getElementById("comparison4");
element.textContent = 5 != 3;
element = document.getElementById("comparison5");
element.textContent = 5 === 3; //so === is strict equality operator, it checks for both value and type
element = document.getElementById("comparison17");
element.textContent = "22" == 22; //so == is loose equality operator, it only checks for value NOT type best AVOIDED
element = document.getElementById("comparison18");
element.textContent = "22" === 22; //so === is strict equality operator, it checks for both value and type
//use === and !== always, == and != are not recommended

element = document.getElementById("boolean1");
element.textContent = true && true; //so && is logical AND operator in JavaScript we assing it to textContent

element = document.getElementById("boolean6");
element.textContent = true || false; //so || is logical OR operator

element = document.getElementById("boolean9");
element.textContent = !true; //so ! is logical NOT operator
element = document.getElementById("boolean10");
element.textContent = !false;


//to show conditional branching //let's change color of output background based on the condition when comparing a and b variables

let a = 5; //imagine this value comes from somewhere else such as user input
let b = 300;

if (a > b) {
    console.log("a is greater than b", a, b, a > b);
    el.style.backgroundColor = "lightgreen";
} else { //by default if the condition is not met here this means a is not greater than b ie a <= b
    console.log("a is not greater than b", a, b, a > b);
    el.style.backgroundColor = "orange";
}

a = 300; //now they are equal

//let's do a 3 way branching
if (a > b) {
    console.log("a is greater than b", a, b, a > b);
    el.style.color = "white";
} else if (a < b) {
    console.log("a is less than b", a, b, a < b);
    el.style.color = "yellow";
} else { //so by Sherlock Holmes if a is not greater than b and a is not less than b then a is equal to b
    console.log("a is equal to b", a, b, a == b);
    el.style.color = "aqua";
}