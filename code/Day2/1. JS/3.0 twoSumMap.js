const twoSumMap = function (inputArray, target) {
  const hashMap = new Map(); //new Set()
  console.log(`Input: ${inputArray}, Target: ${target}`);
  for (var i = 0; i < inputArray.length; i++) {
    console.log(hashMap);
    let complement = target - inputArray[i];
    if (hashMap.has(complement)) {
      return [i, hashMap.get(complement)];
    }
    hashMap.set(inputArray[i], i);
  }
};

console.log(twoSumMap([2, 5, 11, 7, 15], 9));
