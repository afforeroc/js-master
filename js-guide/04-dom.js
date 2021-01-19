'use strict'

// DOM : Document Object Model

// Function over one div
/*
function changeBackgroundColor(color1, color2) {
    boxByID.style.background = color1;
    boxByID.style.color = color2;
}

var boxByID = document.getElementById("box1");
console.log(boxByID);

boxByID.innerHTML = "Another text here!";
boxByID.style.padding = "50px";

var boxQuerySelector = document.querySelector("#box1");
console.log(boxQuerySelector);

changeBackgroundColor("blue", "white");
*/

// Iterate over divs
/*
var redDivs = document.getElementsByClassName('red');
for(let i in redDivs) { // i => {First, Second, Third, length 3}
    if(i < redDivs.length) {
        console.log(i, redDivs[i]);
        redDivs[i].style.background = "red";
    }  
}
*/