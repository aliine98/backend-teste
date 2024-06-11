const express = require('express');

const app = express();
app.use(express.json());
const router = express.Router();
const port = 3333;
const women = [
    {
        id: crypto.randomUUID(),
        name: 'Aline',
        image: 'https://picsum.photos/200',
        desc: 'Desenvolvedora web',
    },
    {
        id: crypto.randomUUID(),
        name: 'Camila',
        image: 'https://picsum.photos/200',
        desc: 'Desenvolvedora web',
    },
];

function showPort() {
    console.log(`Listening on port ${port}`);
}

function showWomen(req, res) {
    res.json(women);
}

function addWoman(req, res) {
    const newWoman = {
        id: crypto.randomUUID(),
        name: req.body.name,
        image: req.body.image,
        desc: req.body.desc,
    };
    women.push(newWoman);
    res.json(women);
}

app.listen(port, showPort);
app.use(router.get('/', showWomen));
app.use(router.post('/adicionar-mulher', addWoman));
