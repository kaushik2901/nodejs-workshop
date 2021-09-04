// console.log(module);
// console.log(this == module.exports);

// this.data = "attaching data to our module!";
// console.log(this.data);
// console.log(module.exports);

// module.exports.foo = 5;

// console.log(this);

// const counter = {
//   count: 2,
//   next: function () {
//     console.log("counter next function this -> ", this);
//     return this.count + 1;
//   },
// };

// console.log(counter.next());

// const counterArrow = {
//   count: 2,
//   next: () => {
//     console.log(
//       "counterArrow this is module.exports ?",
//       this == module.exports
//     );
//     return this.count + 1;
//   },
// };

// console.log(counterArrow.next());

// let obj = {
//   func1: function () {
//     console.log("func1 -> ", this);
//   },
//   func2: () => {
//     console.log("func2 -> ", this);
//   },
// };

// obj.func1();
// obj.func2();
