'use strict'
// Constantes
// Contenedor de información que nunca cambia

var web = "https://google.com";
const ip = "192.99.0.12";

web = "http://duckduckgo.com";
//ip = "22223"; // Uncaught TypeError: Assignment to constant variable.
console.log(web, ip)