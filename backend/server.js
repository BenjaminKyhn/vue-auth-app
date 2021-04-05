const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json())

let messages = [{user: "Jim", text: "one"}, {user: "Jim", text: "two"}, {user: "Jim", text: "three"}];
let users = [{username: "Jim", password: "123"}];

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.get('/messages/:id', (req, res) => {
    res.send(messages[req.params.id]);
});

app.post('/messages', (req, res) => {
    const userId = req.header('Authorization');
    const user = users[userId];
    let msg = {user: user.username, text: req.body.message}
    messages.push(msg)
    res.json(msg)
})

app.post('/register', (req, res) => {
    let user = req.body;
    let newIndex = users.push(user);
    user.id = newIndex - 1;
    res.json(user)
    console.log(users)
})

app.listen(port, () => console.log("app running"));