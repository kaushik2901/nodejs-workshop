//JavaScript Object Notation -> It's a format
// Looks same as Javascript Object but Object can have functions, methods, variables !
// While JSON is data, format used for data transfer

const person = {
    "name" : "kaushik",
    getAge : () => {
        return "22"
    }
}

// personJSON 
// {
//     "name": "kaushik",
//     "age" : 22,
//     "numbers" : ["1234", "5678"],
//     "nested" : {
//         "value" : true
//     }
// }

//Callbacks

setTimeout(() => {
    console.log("i/o activity which takes time");
}, 3000);


console.log("Before")
const user = getUser(1);

console.log(getUser);
console.log("After")

function getUser(id) {
    setTimeout(() => {
        console.log("i/o activity which takes time");
        return {id: id, userName: "rohan"}
    }, 3000);
    
    return null;
}

//map reduce filter



const twoSumMap = function (inputArray, target) {
    const hashMap = new Map(); //new Set()
    console.log(`Input: ${inputArray}, Target: ${target}`)
    for (var i = 0; i < inputArray.length; i++) {
        console.log(hashMap);
        let complement = target - inputArray[i]
        if (hashMap.has(complement)) {
            return [i, hashMap.get(complement)]
        }
        hashMap.set(inputArray[i], i)
    }
};

console.log(twoSumMap([2, 5, 11, 7, 15],9))