setTimeout(() => {
    console.log(`i/o activity which takes time : ${person}`);
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