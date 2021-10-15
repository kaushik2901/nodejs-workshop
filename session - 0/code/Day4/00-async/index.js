const getTheData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw Error();
    const data = await response.json();
    // do something with this data... save to db, update the DOM, etc.
    console.log(data);
    console.log("You will see this last.");
  } catch (err) {
    console.error(err);
  }
};

getTheData();
console.log("You will see this first.");
