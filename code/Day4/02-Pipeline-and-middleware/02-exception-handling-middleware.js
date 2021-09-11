const express = require("express");
const app = express();
const port = 3000

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/test", (req, res) => {
    res.json({ success: true });
});

app.get("/admin", (req, res) => {
    res.json({ admin: true });
});

app.get("/admin/:id", (req, res) => {
    console.log(something);
    res.json({ admin: true, id: req.params.id });
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
        error: err.message
    });
});

// establish http server connection
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});