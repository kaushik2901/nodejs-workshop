const arr = ["5", "2", "3"];

const sorted = arr.sort((firstEle, secondEle) => {
  return firstEle < secondEle ? 1 : -1;
});
console.log("sorted", arr);
