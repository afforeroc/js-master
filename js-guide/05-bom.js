'use strict'

// BOM : Browser Object Model

function getBOM() {
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}

function redirect(url) {
    window.open(url, "", "width=400, heigth=300");
}

getBOM();
redirect("https://www.google.com");