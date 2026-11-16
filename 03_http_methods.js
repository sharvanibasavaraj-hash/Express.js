const express = require("express");

const app = express();

app.use(express.json());

app.get("/students", (req, res) => {
    res.send("Get all students");
});

app.post("/students", (req, res) => {
    res.send("Student created");
});

app.put("/students/:id", (req, res) => {
    res.send("Student updated: " + req.params.id);
});

app.delete("/students/:id", (req, res) => {
    res.send("Student deleted: " + req.params.id);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});