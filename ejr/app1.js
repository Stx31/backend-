const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();



const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/mydb';


if (mongoose.connection.readyState === 1) {

  return mongoose.connection;
}

return mongoose.openUri(connectionString);

const Datos = mongoose.model('Datos', {
    edad: Number,
    datosBancarios: String
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/1.html');
});

app.post('/guardar', (req, res) => {
    const { edad, datos_bancarios } = req.body;

    const nuevoDato = new Datos({
        edad: edad,
        datosBancarios: datos_bancarios
    });

    nuevoDato.save()
        .then(() => {
            res.send('Datos guardados correctamente.');
        })
        .catch(error => {
            res.status(400).send('Error al guardar los datos: ' + error);
        });
});

const puerto = 3000;
app.listen(puerto, () => {
    console.log(`Servidor en ejecución en el puerto ${puerto}`);
});
