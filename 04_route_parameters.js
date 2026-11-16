const express = require("express");

const app = express();

app.get("/students/:id", (req, res) => {
    const studentId = req.params.id;

    res.send("Student ID: " + studentId);
});

app.get("/products/:category/:id", (req, res) => {
    res.json({
        category: req.params.category,
        productId: req.params.id
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});