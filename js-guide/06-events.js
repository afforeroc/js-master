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
