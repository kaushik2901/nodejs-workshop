// Declaration

var a = 5;
var b = 6;
var c = a + b;

console.log("c = ", c);


// Three ways to declare variable

var d = "Variable"; // Function scoped
let e = "Variable"; // Block scoped
const f = "Variable"; // Block scoped


var age = 23 // Numbers (integer)
var pi = 3.14 // Numbers (float)
var text = "init" // Text (strings)
var operation = 1 + 2 + 3 // Operations
var boolean = true // Boolean (True or false statements)
var user = { firstName: "John", lastName: "Doe" } // Objects
var u = undefined // undefined
console.log(user.age); // undefined
var x = null; // null


// hoist
console.log("unDeclaredVariable = ", unDeclaredVariable);
var unDeclaredVariable = 10;

// console.log("unDeclaredLetVariable = ", unDeclaredLetVariable);
// let unDeclaredLetVariable = 10;

// console.log("unDeclaredConstVariable = ", unDeclaredConstVariable);
// let unDeclaredConstVariable = 10;

