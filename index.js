const express = require('express');
const connectDb = require('./db');
const Woman = require('./WomanModel');

const app = express();
app.use(express.json());
const router = express.Router();
const port = 3333;

connectDb();

function showPort() {
    console.log(`Listening on port ${port}`);
}

//GET
async function showWomen(req, res) {
    const women = await Woman.find();
    res.json(women);
}

//POST
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

//PATCH
function updateWoman(req, res) {
    const womanToUpdate = women.find(woman => woman.id === req.params.id);

    if (!womanToUpdate) {
        return res.status(404).json({ message: 'Mulher não encontrada' });
    }
    if (req.body.name) {
        womanToUpdate.name = req.body.name;
    }
    if (req.body.image) {
        womanToUpdate.image = req.body.image;
    }
    if (req.body.desc) {
        womanToUpdate.desc = req.body.desc;
    }
    res.json(women);
}

//DELETE
function deleteWoman(req, res) {
    // const womanToDelete = women.find((woman) => woman.id === req.params.id);
    // if (!womanToDelete) {
    //     return res.status(404).json({ message: 'Mulher não encontrada' });
    // }
    // const index = women.indexOf(womanToDelete);
    // women.splice(index, 1);
    // res.json(women);

    const newWomenList = women.filter(woman => woman.id !== req.params.id);
    res.json(newWomenList);
}

app.listen(port, showPort);
app.use(router.get('/mulheres', showWomen));
app.use(router.post('/nova-mulher', addWoman));
app.use(router.patch('/mulheres/:id', updateWoman));
app.use(router.delete('/mulheres/:id', deleteWoman));
