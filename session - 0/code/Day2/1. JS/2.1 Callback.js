console.log("Before");

function myCallBackFunction(user) {
  console.log(user);
  console.log("After");
}

getUser(1, myCallBackFunction);

function getUser(id, callback) {
  setTimeout(() => {
    console.log("i/o activity which takes time");
    const userFromDB = { id: id, userName: "rohan" };
    callback(userFromDB);
  }, 3000);
}
