'use strict'

// Parameters on functions
/*
function mySum(param1, param2, optionalParam = true) {
    if(optionalParam){
        return param1 + param2;
    }
    return 0;
}
console.log(mySum(1, 10));
console.log(mySum(1, 10, false));
*/


// REST parameter: capture an undefined number of parameters
/*
function mySum (param1, param2, ...param3) {
    console.log("param3 = " + param3);
    var sum3 = 0
    for(var i=0; i<param3.length; i++) {
        sum3 += param3[i];
    }
    return param1 + param2 + sum3;
}
console.log(mySum(1, 2))
console.log(mySum(1, 2, 3, 4))
*/


// SPREAD operator
/*
function mySum (param1, param2, param3) {
    return param1 + param2 + param3;
}
let  params = [32, 50, 21];
console.log(mySum(...params)); // 103
*/


// ANON function: dont have name
/*
var movie = function(name) {
    return "The movie is: " + name;
}
console.log(movie("dammit!"))
*/


// Callback function
/*
function sumame (num1, num2, sumaMuestra, sumaDoble) {
    var suma = num1 + num2;
    sumaMuestra(suma);
    sumaDoble(suma);
    return suma;
}

sumame(5, 7, 
    dato => {console.log("La suma es: ", dato);},
    dato => {console.log("La suma doble es: ", (dato*2));}
);*/



// Text functions
/*
text.toLowerCase();
text.toUpperCase();
text.length;
texto1 + " " + texto2; // Concatenate
texto1.concat(" " + texto2); // Concatenate
text.indexOf("curso"); // First coincidence
text.lastIndexOf("curso"); // Last coincidence
text.search("curso"); // 
text.match(/curso/g); // Return the array of coincidences
text.subtr(14, 5); // Extract sub-string (index, length)
text.charAt(14); // EXtract char of index
text.startsWith("Bienvenido"); // Verify if a text starts with a specific string
text.endsWith("final."); // Verify if a text ends with a specific string
text.includes("javascript") // Verify if a text have a specific string
text.replace("JS", "Symphony");
text.slice(14); // Cut text between indexes
text.slice(3, 10);
text.split(" "); // Cut words using eg. " " (spaces), return to array
text.trim(); // Delete left and right spaces
*/


// Template - String interpolation
/*
var name = "Andrés";
var lastname = "Forero";
var text = `
    <h1>Hello!</h1>
    <p>My name is: ${name}</p>
    <p>My last name is: ${lastname}</p>
`;
document.write(text);
*/