import http from "http";

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html"),
    res.end("<h1>This is website designed by Harsh Saxena - The greatest coder of all time</h1>");
});

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});