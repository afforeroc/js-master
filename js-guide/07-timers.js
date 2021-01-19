'use strict'

window.addEventListener('load', () => {
    // // setInterval: execute in loop
    function intervalLoop() {
        var time = setInterval( () => {
            console.log("Set interval executing");
            var header = document.querySelector("h1");
            if (header.style.fontSize == "50px") {
                header.style.fontSize = "30px";
            } else {
                header.style.fontSize = "50px";
            }
        }, 1000);
        return time;
    }
    var time;
    //var time = intervalLoop();

    // Stops the loop of setInterval
    var stopButton = document.querySelector("#stopButton");
    stopButton.addEventListener("click", () => {
        alert("You have stopped the loop");
        time = clearInterval(time);
    });

    // Start the loop of setInterval
    var startButton = document.querySelector("#startButton");
    startButton.addEventListener("click", () => {
        alert("You have start the loop");
        time = intervalLoop();
    });

    // setTimeout: execute once time
    /*
    var time = setTimeout( () => {
        console.log("Set interval executing");
        var header = document.querySelector("h1");
        if (header.style.fontSize == "50px") {
            header.style.fontSize = "30px";
        } else {
            header.style.fontSize = "50px";
        }
    }, 500);
    */
});