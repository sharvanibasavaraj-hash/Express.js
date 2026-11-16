const express = require("express");

const app = express();

app.use(express.json());

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/students", (req, res) => {
    res.json([
        { id: 1, name: "Rahul" },
        { id: 2, name: "Priya" }
    ]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});s