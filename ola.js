const express = require('express');

const app = express();
const router = express.Router();
const port = 3333;

function showPort() {
    console.log(`Listening on port ${port}`);
}

function showHello(req, res) {
    res.send('Hello world! From server');
}

app.listen(port, showPort);
app.use(router.get('/hello', showHello));
