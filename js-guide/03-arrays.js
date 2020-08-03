'use strict'

// What is an Array?
/*
var nombres = ["Victor", 1, true];
var languages = new Array("PHP", "JS", "Go"); // Array in objecto form
console.log(nombres);
console.log(languages);
*/


// Iterate with 'for'
/*
var languages = new Array("PHP", "JS", "Go");
document.write("<ul>")
for (var i=0; i< languages.length; i++) {
    document.write("<li>" + languages[i] + "</li>");
}
document.write("</ul>")
*/


// Iterate with 'forEach'
/*
var languages = new Array("PHP", "JS", "Go");
document.write("<ul>")
languages.forEach((element, index, arr) => {
    console.log(arr);
    document.write("<li>" + index + " - " + element + "</li>");
});
document.write("</ul>")
*/


// Multidimensional array
/*
var categorias = ['Accion', 'Terror', 'Comedia'];
console.log(categorias);
var peliculas = ['La verdad duele', 'La vida es bella'];
console.log(peliculas);
var cine = [categorias, peliculas];
console.log(cine[0][1]);
console.log(cine[1][1]);
*/


// Array operators
/*
var movies = ['La verdad duele', 'La vida es bella', 'Revolver'];
console.log(movies);

movies.push('Gran torino'); // Add elements
movies.push('Cinema Paradiso');
console.log(movies);

movies.pop() // Delete the last element ('Cinema Paradiso')
console.log(movies);

movies.splice(0, 2) // Delete elements from index ('La verdad duele', 'La vida es bella')
console.log(movies);

var string = movies.join(); // Concatenate all elements ('Revolver,Gran torino')
console.log(string);
*/

// String to Array
/*
var string = "text1, text2, text3";
var array = string.split(", ");
console.log(array);
*/

// Order an array of text
/*
var movies = ['Ex-Machina', 'Terminator II', 'Alien'];
movies.sort();
console.log(movies);

movies.reverse();
console.log(movies);
*/


// Order an array of numbers
/*
var numbers = [223, 12, 534, 21, 1837];
numbers.sort(); 
console.log(numbers); // 12, 1837, 21, 223, 534

numbers.reverse();
console.log(numbers); // 534, 223, 21, 1837, 12

numbers.sort((a, b) => (a-b));
console.log(numbers); // 12, 21, 223, 534, 1837

numbers.reverse();
console.log(numbers); // 1837, 534, 223, 21, 12
*/


// Iterate Arrays - for with var
/*
var languages = new Array("PHP", "JS", "Go");
for(var i = 0; i < languages.length; i++) {
    document.write("<li>" +  languages[i] + "</li>")
}
*/

// Iterate Arrays - for with let
/*
var languages = new Array("PHP", "JS", "Go");
for(let lang in languages) {
    document.write("<li>" +  languages[lang] + "</li>")
}
*/


// Iterate Arrays - forEach
/*
var languages = new Array("PHP", "JS", "Go");
languages.forEach( (element, index) => {
    document.write("<li>" +  element + "</li>")
});
*/


// Search text
/*
var languages = new Array("PHP", "JS", "Go");
var search1 = languages.find(lang => lang == "PHP");
var search2 = languages.find(lang => lang == "PHP7");
var search3 = languages.findIndex(lang => lang == "Go");
console.log(search1);
console.log(search2);
console.log(search3);
*/

// Search numbers with conditions
/*
var prices = [10, 20, 30, 40, 50];
var search1 = prices.some(price => price >= 20);
var search2 = prices.some(price => price >= 60);
console.log(search1)
console.log(search2)
*/

