const express = require("express");

const app = express();

app.use(express.json());

app.post("/students", (req, res) => {
    const student = req.body;

    res.json({
        message: "Student details received",
        student: student
    });
});

app.listen(3006, () => {
    console.log("Server running at http://localhost:3006");
});