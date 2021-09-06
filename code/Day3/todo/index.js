const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const guid = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2);

/*

GET  /todos
GET  /todos/:id
POST /todos
PUT  /todos/:id
DELETE /todos/:id

*/

const todos = [
    {
        id: "123",
        title: "Todo",
        isCompleted: false
    }
];

app.get("/todos", function(req, res) {
    res.json(todos);
})

app.get("/todos/:id", function(req, res) {
    const id = req.params.id;
    const index = todos.findIndex(x => x.id == id);
    if(index < 0) {
        res.status(404).json({
            error: "item not found"
        });
        return;
    }

    res.json(todos[index]);
})

app.post("/todos", function(req, res) {
    const { title } = req.body;
    const newItem = {
        id: guid(),
        title: title,
        isCompleted: false
    }

    todos.push(newItem)
    res.json(newItem)
})

app.put("/todos/:id", function(req, res) {
    const id = req.params.id;
    const { title } = req.body;

    const index = todos.findIndex(x => x.id == id);
    if(index < 0) {
        res.status(404).json({
            error: "item not found"
        });
        return;
    }

    todos[index].title = title;
    res.json(todos[index]);
})

app.put("/todos/:id/toggle-is-completed", function(req, res) {
    const id = req.params.id;

    const index = todos.findIndex(x => x.id == id);
    if(index < 0) {
        res.status(404).json({
            error: "item not found"
        });
        return;
    }

    todos[index].isCompleted = !todos[index].isCompleted;
    res.json(todos[index]);
})

app.delete("/todos/:id", function(req, res) {
    const id = req.params.id;

    const index = todos.findIndex(x => x.id == id);
    if(index < 0) {
        res.status(404).json({
            error: "item not found"
        });
        return;
    }

    todos.splice(index, 1);
    console.log(todos);
    res.status(204).send();
})


app.listen(3000, () => console.log("Server is started on 3000"));