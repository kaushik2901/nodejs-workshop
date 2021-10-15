const fetch = require('node-fetch');

console.log("Hello")

fetch('https://api.github.com/users/github')
.then(res => res.json())
.then(json => console.log(json));