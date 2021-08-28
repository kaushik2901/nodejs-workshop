const obj = {3: "test3", 2: "test2",  1: "test1"}
console.log("Object", obj);

const map = new Map()
map.set(3, "test3")
map.set(2, "test2")
map.set(1, "test1")

console.log(map);


const N = 100000;
const benchMarkMap = new Map();
console.time()
/***********************************/
for(let i = 0 ; i < N; i++ ) {
    let v = i%20;
    if (!benchMarkMap.get(v))
        benchMarkMap.set(v, i);
}
/***********************************/
console.log('Section 1 Map : ');
console.timeEnd();


const benchMarkObject = {};
console.time()
/***********************************/
for(let i = 0 ; i < N; i++) {
    let v = i%20;
    if (!benchMarkObject[v])
    benchMarkObject[v] = 1;
}
/***********************************/
console.log('Section 2 Object : ');
console.timeEnd();