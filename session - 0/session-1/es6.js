//Node - VS Code - Github

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example :
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Create a function such that : console.log(twoSumMap([2,7,11,15],9)) => Output : [0,1]

//Two Sum - Input validations
const twoSumValidations = (inputArray, target) => {
  // if(typeof inputArray == 'Array')
  if (inputArray instanceof Array) {
    if (!Array.isArray(inputArray)) {
      return "Input validation error";
    }
    for (let i = 0; i < inputArray.length; i++) {
      for (let j = 0; j <= inputArray.length; j++) {
        if (i === j) {
          continue;
        }
        if (inputArray[i] + inputArray[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

//Two Sum - Arrow Function
const twoSumArrowFunc = (inputArray, target) => {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j <= inputArray.length; j++) {
      if (i === j) {
        continue;
      }
      if (inputArray[i] + inputArray[j] === target) {
        return [i, j];
      }
    }
  }
};

//Two Sum - For Loops
const twoSumLoops = function (inputArray, target) {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j <= inputArray.length; j++) {
      if (i === j) {
        continue;
      }
      if (inputArray[i] + inputArray[j] === target) {
        return [i, j];
      }
    }
  }
};

//Two Sum - Object !
const twoSumObject = function (inputArray, target) {
  var d = {};
  for (var i = 0; i < inputArray.length; i++) {
    if (!d.hasOwnProperty(target - inputArray[i])) {
      d[inputArray[i]] = i;
    } else {
      return [d[target - inputArray[i]], i];
    }
  }
};

//Two Sum - Map
const twoSumMap = function (inputArray, target) {
  const hashMap = new Map();
  for (var i = 0; i < inputArray.length; i++) {
    let complement = target - inputArray[i];
    if (hashMap.has(complement)) {
      return [i, hashMap.get(complement)];
    }
    hashMap.set(inputArray[i], i);
  }
};

console.log(twoSumArrowFunc([2, 7, 11, 15], 9));
console.log(twoSumLoops([2, 7, 11, 15], 9));
console.log(twoSumObject([2, 7, 11, 15], 9));
console.log(twoSumMap([2, 7, 11, 15], 9));
console.log(twoSumMap(2, 9));
console.log(twoSumValidations(2, 9));
