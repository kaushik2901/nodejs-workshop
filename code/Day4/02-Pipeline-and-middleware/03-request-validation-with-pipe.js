const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const adminRequestValidator = (req, res, next) => {
    if (req.params.id < 10) {
        res.status(400).json({
            error: "Id must be greater than or equal to 10"
        })
    } else {
        next()
    }
}

app.get("/admin/:id", adminRequestValidator, (req, res) => {
    res.json({ admin: true, id: req.params.id });
});

// establish http server connection
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

