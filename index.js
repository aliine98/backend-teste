const express = require('express');

const app = express();
const router = express.Router();
const port = 3333;

function showPort() {
    console.log(`Listening on port ${port}`);
}

function showWomen(req, res) {
    res.send([
        {
            name: 'Aline',
            desc: 'Desenvolvedora web',
            phrase: 'Ola mundo!',
        },
        {
            name: 'Camila',
            desc: 'Desenvolvedora web',
            phrase: 'Ola mundo!',
        },
    ]);
}

app.listen(port, showPort);
app.use(router.get('/', showWomen));
