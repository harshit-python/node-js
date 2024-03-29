import http from "http";
import fs from "fs";

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html")

    if (req.url == "/") {
        res.end(`<h1>This is the Home Page.</h1>
        <h3>This is website designed by Harsh Saxena - The greatest coder of all time.</h3>`);
    } 
    else if (req.url == "/index"){
        const data = fs.readFileSync("index.html");
        res.end(data.toString());
    } else if (req.url == "/about") {
        res.end(`<h1>This is the About Page.</h1>`);
    } else {
        res.statusCode = 404;
        res.end(`<h1> 404 - Not Found</h1>
        <h3>This page was not found on this server</h3>`);
    }

});

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});