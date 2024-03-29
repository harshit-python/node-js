const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
    // console.log(err, data);
});

// console.log("Finished reading file")

fs.writeFile("file2.txt", "This is the data for file2", () => {
    console.log("written to the file");
})

/* here console log at line 7 will get printed first 
to avoid this we will use readFileSync
*/

const data = fs.readFileSync("file.txt");
console.log(data.toString());
console.log("Finished reading file");
const writtenData = fs.writeFileSync("file2.txt", "this is the updated data");
console.log(writtenData);

