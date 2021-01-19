'use strict'

window.addEventListener('load', () => {
    var myButton = document.querySelector("#myButton");

    function changeColor() {
        var bg = myButton.style.background;
        if (bg == "green") {
            myButton.style.background = "red";
        } else {
            myButton.style.background = "green";
        }
        return true;
    }

    // Click
    myButton.addEventListener('click', () => 
        changeColor()
    );

    // Mouse over
    myButton.addEventListener('mouseover', () => 
        myButton.style.background = "#ccc"
    );

    // Mouseout
    myButton.addEventListener('mouseout', () => 
        myButton.style.background = "black"
    );

    // Focus
    var myInput = document.querySelector("#name_field");
    myInput.addEventListener('focus', () => 
        console.log("[focus] You are inside of input!")
    );

    // Blur
    myInput.addEventListener('blur', () => 
        console.log("[blur] You outside of input!")
    );

    // Keydown
    myInput.addEventListener('keydown', (event) => 
        console.log("[keydown] Pressing key ", String.fromCharCode(event.keyCode))
    );

    // Keypress
    myInput.addEventListener('keypress', (event) => 
        console.log("[keypress] Pressed key ", String.fromCharCode(event.keyCode))
    );

    // Keyup
    myInput.addEventListener('keyup', (event) => 
        console.log("[keyup] unpressed key ", String.fromCharCode(event.keyCode))
    );

}); // Final del load
