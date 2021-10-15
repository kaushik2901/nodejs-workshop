this.foo = 6
let obj = {
  func1: function () {
    console.log("func1 -> ", this);
  },
  func2: () => {
    console.log("func2 -> ", this);
  },
};

obj.func1();
obj.func2();
