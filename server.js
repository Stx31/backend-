const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const nombresGuardados = [];

app.post('/guardar-nombre', (req, res) => {
    const { name } = req.body;
    nombresGuardados.push(name);
    res.json({ message: 'Nombre guardado con éxito' });
});

app.get('/obtener-nombres', (req, res) => {
    res.json({ nombres: nombresGuardados });
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
