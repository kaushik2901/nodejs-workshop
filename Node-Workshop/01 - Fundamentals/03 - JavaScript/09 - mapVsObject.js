Map 
Set



const N = 100000000 * 10;
const benchMarkMap = new Map();
console.time();
/***********************************/
for (let i = 0; i < N; i++) {
  let v = i % 20;
  if (!benchMarkMap.get(v)) benchMarkMap.set(v, i);
}
/***********************************/
console.log("Section 1 Map : ");
console.timeEnd();

const benchMarkObject = {};
console.time();
/***********************************/
for (let i = 0; i < N; i++) {
  let v = i % 20;
  if (!benchMarkObject[v]) benchMarkObject[v] = 1;
}
/***********************************/
console.log("Section 2 Object : ");
console.timeEnd();
