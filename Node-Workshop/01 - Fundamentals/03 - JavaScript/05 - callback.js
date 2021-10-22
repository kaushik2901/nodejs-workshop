console.log("Before");

function myCallBackFunction(user) {
  console.log(user);
  console.log("After");
}

getUser(1, myCallBackFunction);


//library
function getUser(id, callback, errCallback) {
  setTimeout(() => {
    console.log("i/o activity which takes time");
    const userFromDB = { id: id, userName: "rohan" };
    if(userFromDB != null)
      callback(userFromDB);
    else errCallback()
  }, 3000);
}
