const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Middleware
app.use((req, res, next) => {
    console.log("This log comes beefore each requst", req.url);
    next();
    console.log("This log comes after each request", req.url);
});

// Middleware to specific path
app.use("/admin", (req, res, next) => {
    console.log("This middleware only applies to /admin directory.");
    next();
})

app.get("/test", (req, res) => {
    console.log("Before processing");
    res.json({ success: true });
    console.log("After processing");
});

app.get("/admin", (req, res) => {
    res.json({ admin: true });
});

app.get("/admin/:id", (req, res) => {
    res.json({ admin: true, id: req.params.id });
});

// establish http server connection
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
