// Function Declaration

function myFunction(a, b) {
  return a * b; // Function returns the product of a and b
}

let x = myFunction(4, 3); // Function is called, return value will end up in x
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

const myFunctionVariable = function (a, b) {
  return a * b;
};

// New Syntax

const myFunction3 = (a, b) => {
  return a * b;
};

const myFunction4 = (a, b) => a * b;

const myFunction5 = (a) => a * 10;

// Variable scoping

function variableScoping() {
  {
    var functionScoped = 10;
    let blockScoped = 10;

    console.log("inside block", "functionScoped", functionScoped);
    console.log("inside block", blockScoped);
  }

  console.log("outside block", "functionScoped", functionScoped);
  // console.log("outside block", "blockScoped", blockScoped);
}

variableScoping();

// console.log("outside function", "functionScoped", functionScoped);
// console.log("outside function", "blockScoped", blockScoped);


// Function as variable

function functionAsVariable(user) {
  console.log("Hello,", user);
}

var newVariable = functionAsVariable;
newVariable("Alice");


// Returning a function

function returnAFunction() {
  return function internalFunction(name) {
    console.log("Hello,", name);
  }
}

var internalFunction = returnAFunction();
internalFunction("John");

// Closure and private function
const parentFunction = () => {
  const nestedFunction = () => {
    console.trace("Trace: How did I get there?");
  };

  nestedFunction();
};

// parentFunction();