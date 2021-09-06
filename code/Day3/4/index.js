const axios = require("axios");
console.log("hello");
axios.get("https://google.com").then((res) => {
  console.log(res);
});
