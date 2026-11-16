const express = require("express");

const app = express();

app.get("/students/:id", (req, res, next) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            const error = new Error("Invalid student ID");
            error.status = 400;
            throw error;
        }

        res.json({
            id: id,
            name: "Rahul"
        });

    } catch (error) {
        next(error);
    }
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || "Something went wrong"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});