// JavaScript Object Notation -> It's a format
// Looks same as Javascript Object but Object can have functions, methods, variables !
// While JSON is data, format used for data transfer

const person = {
  name: "kaushik",
  getAge: () => {
    return "22";
  },
};

console.log(person);
console.dir(person); // For browser

// personJSON
// {
//     "name": "kaushik",
//     "age" : 22,
//     "numbers" : ["1234", "5678"],
//     "nested" : {
//         "value" : true
//     }
// }
