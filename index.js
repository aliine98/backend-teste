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
    try {
        const women = await Woman.find();
        res.json(women);
    } catch (e) {
        console.log(e);
    }
}

//POST
async function addWoman(req, res) {
    const newWoman = new Woman({
        name: req.body.name,
        image: req.body.image,
        desc: req.body.desc,
    });
    try {
        const addedWoman = await newWoman.save();
        res.status(201).json(addedWoman);
    } catch (e) {
        console.log(e);
    }
}

//PATCH
async function updateWoman(req, res) {
    try {
        const womanToUpdate = await Woman.findById(req.params.id);

        if (req.body.name) {
            womanToUpdate.name = req.body.name;
        }
        if (req.body.image) {
            womanToUpdate.image = req.body.image;
        }
        if (req.body.desc) {
            womanToUpdate.desc = req.body.desc;
        }

        const updatedWoman = await womanToUpdate.save();
        res.json(updatedWoman);
    } catch (e) {
        console.log(e);
    }
}

//DELETE
async function deleteWoman(req, res) {
    try {
        await Woman.findByIdAndDelete(req.params.id);
        res.json({ message: 'Mulher deletada com sucesso' });
    } catch (e) {
        console.log(e);
    }
}

app.listen(port, showPort);
app.use(router.get('/mulheres', showWomen));
app.use(router.post('/nova-mulher', addWoman));
app.use(router.patch('/mulheres/:id', updateWoman));
app.use(router.delete('/mulheres/:id', deleteWoman));
