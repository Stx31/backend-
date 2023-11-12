const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());


let storedData = {};

app.post('/guardar-datos', (req, res) => {
    const { nombre, edad } = req.body;
    storedData = { nombre, edad };
    res.json({ message: 'Datos guardados con éxito' });
});

app.get('/obtener-datos', (req, res) => {
    res.json(storedData);
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
