const express = require('express');
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const todoList = [
    {
        "title": "Task 1"
    }
]

app.post("/todos", (req, res) => {
    res.send(req.body);
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});