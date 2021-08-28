const arr = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4];

const withIndex = arr.map((v, i) => `index: ${i}, value: ${v}`);
console.log(withIndex);

const some = arr.some(v => v === 6)
console.log("some", some);

const every = arr.every(v => v > 3);
console.log("every", every);

const filter = arr.filter(v => v !== 5)
console.log("filter", filter);

const sorted = arr.sort((a, b) => a < b);
console.log("sorted", sorted);