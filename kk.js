const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

const DEFAULT_USER = {
    name: "mil",
    password: "123"
}

let datos = []

app.use(bodyParser.json());

app.get('/delete', async (req, res) => {
    try {
        datos = []
        res.json(
            "Borrado!"
        );
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/datos', async (req, res) => {
    try {


        res.json({
            datos
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/hola', async (req, res) => {
    try {
        const body = req.body;
        datos.push(body)

        body.password === DEFAULT_USER.password

        console.log("body", body)

        const isCorrectPass = body.password === DEFAULT_USER.password

        if (isCorrectPass) {

            res.status(200).json("Logeado");
        }else{
            res.status(401).json("NO auty");
        }

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


app.listen(port, () => {
    console.log(`El servidor está en funcionamiento en el puerto ${port}`);
});
