/***** Variablen 01 *******/

// Zeilenkommentar

/**
   Blockkommentar
 */

// Ausgabe
//console.log("Hallo Welt");
//console.log(firstName);

// Deklaration + Wertzuweisung
/*
let firstName; // Deklaration (Definition)
firstName = "Max"; // Wertzuweisung
console.log(firstName); // Ausgabe
let familyName = "Mütze"; // Deklaration + Wertzuweisung
console.log(familyName); // Ausgabe
console.log(firstName + " " + familyName);
*/

// Deklaration + Wertzuweisung II
/*
let firstName,familyName;
firstName = prompt("Bitte Vornamen  eingeben");
familyName = prompt("Bitte Namen eingeben");
console.log("Hallo, " + firstName + " " + familyName +"!");
*/

// JS ist eine untypisierte Sprache! | untyped
/*
let test; // Deklaration
test = "hi"; //string
test = 2; //number
test = true; //boolean
console.log("Typ: " + typeof test);
console.log("Inhalt: " + test);
*/

/***** Variablen 02 *****/

//Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

// Wertzuweisung | Assignment
let date = new Date();
let year = date.getFullYear();
//console.log(year);
//console.log(date);
ageJohn = 25; 
ageMark = 30;
