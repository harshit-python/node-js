const path = require("path");

// this gives the current file name
const filePath = path.basename("/home/t2b/using node/os module.js");
console.log(filePath);

// this gives the directory path
const dirName = path.dirname("/home/t2b/using node/os module.js");
console.log(dirName);

// this gives the file extension
const fileExt = path.extname(__filename);
console.log(fileExt);