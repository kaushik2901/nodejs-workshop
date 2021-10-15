// Function Declaration

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

let x = myFunction(4, 3);   // Function is called, return value will end up in x
console.log("x = ", x);

// Default Arguments

function myFunction2(a, b = 3) {
  return a * b;
}

let y = myFunction2(4);
console.log("y = ", y);

let z = myFunction2(4, 4);
console.log("z = ", z);


// With Variable

const myFunctionVariable = function(a, b) {
    return a * b;
}

// New Syntax

const myFunction3 = (a, b) => {
    return a * b
}

const myFunction4 = (a, b) => a * b;

const myFunction5 = a => a * 10;