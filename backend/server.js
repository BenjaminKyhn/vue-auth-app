const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const messages = ["Hello", "Hi", "Derp"];

    res.send(messages);
});

app.listen(port, () => console.log("app running"));