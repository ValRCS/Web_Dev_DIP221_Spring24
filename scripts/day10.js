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

let element = document.getElementById("comparison1")
element.textContent = 5 > 3; //so > is done first and then the result is assigned to textContent
element = document.getElementById("comparison2") //reusing the same variable, can also lead to bugs
element.textContent = 5 < 3;
element = document.getElementById("comparison3")
element.textContent = 5 == 3;
element = document.getElementById("comparison4")
element.textContent = 5 != 3;
element = document.getElementById("comparison5")
element.textContent = 5 === 3; //so === is strict equality operator, it checks for both value and type
element = document.getElementById("comparison17")
element.textContent = "22" == 22; //so == is loose equality operator, it only checks for value NOT type best AVOIDED
element = document.getElementById("comparison18")
element.textContent = "22" === 22; //so === is strict equality operator, it checks for both value and type
//use === and !== always, == and != are not recommended
