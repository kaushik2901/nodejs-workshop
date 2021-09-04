// Path Module
// const path = require("path");

// Parse path
// console.log(path.parse(__filename));

// Join path
// console.log(path.join("test", "test", "test"));

// File Module
const fs = require("fs");

// Working with Directories

// Read Directory
// const data = fs.readdirSync(".");
// console.log(data);

// Create Directory
// fs.mkdirSync("./Directory");

// Rename Directory

// let filename = "";
// let renamedFileName = "";

// const readline = require("readline");
// const rl = readline.createInterface(process.stdin, process.stdout);

// rl.question("Enter file to rename ", (fN) => {
//   filename = fN;
//   rl.question("Enter the new name ", (newName) => {
//     renamedFileName = newName;
//     rl.close();
//     fs.renameSync("./" + filename, "./" + renamedFileName);
//   });
// });

// Remove Empty Directory
// fs.rmdirSync("./RenamedDirectory");

// Remove Non Empty Directory
// fs.rmSync("./RenamedDirectory", { recursive: true, force: true });

// Working with Files

// Read File
// const d = fs.readFileSync("after.json");
// console.log(d.toString());

// Create File
// fs.openSync("test.json", "w");

// Append File
// fs.appendFileSync("test.json", '{"test":true}');

// Replace File Content
// fs.writeFileSync("test.json", "Hello Guys!");

// Rename File
// fs.renameSync("test.json", "test2.json");

// Delete File
fs.rmSync("test2.json");
