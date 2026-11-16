const express = require("express");

const app = express();

app.get("/search", (req, res) => {
    res.json({
        name: req.query.name,
        department: req.query.department
    });
});

app.listen(3005, () => {
    console.log("Server running on port 3005");
});