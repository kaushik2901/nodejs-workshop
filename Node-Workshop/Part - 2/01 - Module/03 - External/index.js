const axios = require("axios");

function callAxios_WithCallback() {
  axios.get("https://google.com").then((res) => {
    console.log(res);
  });
}

async function callAxios_withAwait() {
  const res = await axios.get("https://google.com");
  console.log(res);
}

// callAxios_withAwait();
// callAxios_WithCallback();

console.log("First console log");
setTimeout(() => console.log("Second console log"), 0);

async function log() {
  await console.log("Third console log");
}

log();

console.log("Fourth console log");

setTimeout(() => console.log("Fifth console log"), 3000);
