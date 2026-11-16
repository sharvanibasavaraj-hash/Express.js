const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Success");
});

app.get("/created", (req, res) => {
    res.status(201).json({
        message: "Resource created"
    });
});

app.get("/missing", (req, res) => {
    res.status(404).send("Resource not found");
});

app.get("/error", (req, res) => {
    res.status(500).send("Internal server error");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});