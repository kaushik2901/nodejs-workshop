//Functional Javascript

const arr = ["5", "2", "3"];

// const withIndex = arr.map((value, index) => `index: ${index}, value: ${value}`);
// console.log(withIndex);

// const some = arr.some((v) => v === 6);
// console.log("some", some);

// const every = arr.every((v) => v > 3);
// console.log("every", every);

// const filter = arr.filter((v) => v !== 5);
// console.log("filter", filter);

const sorted = arr.sort((a, b) => {
  console.log(a, b, a < b);
  return a < b ? -1 : 1;
});
console.log("sorted", arr);
