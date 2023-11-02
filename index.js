const express = require("express");
const path = require("path");
const mongoose = require('mongoose'); // Agrega esta línea
const app = express();
const LogInCollection = require("./mongo");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/tu-basededatos', { useNewUrlParser: true, useUnifiedTopology: true }); // Reemplaza con tu URL de conexión

const tempelatePath = path.join(__dirname, '../tempelates');
const publicPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.set('views', tempelatePath);
app.use(express.static(publicPath));

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/', (req, res) => {
    res.render('login');
});

app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    };

    try {
        const checking = await LogInCollection.findOne({ name: req.body.name });
        if (checking && checking.password === req.body.password) {
            res.send("User details already exist");
        } else {
            await LogInCollection.create(data);
        }
    } catch (error) {
        res.send("Wrong inputs");
    }

    res.status(201).render("home", {
        naming: req.body.name
    });
});

app.post('/login', async (req, res) => {
    try {
        const check = await LogInCollection.findOne({ name: req.body.name });

        if (check && check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` });
        } else {
            res.send("Incorrect password");
        }
    } catch (error) {
        res.send("Wrong details");
    }
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

mongoose.connection.close(function () {
    // Abrir una nueva conexión con una cadena de conexión diferente
    mongoose.connect('nueva_cadena_de_conexion', { useNewUrlParser: true, useUnifiedTopology: true });
  });
  mongoose.connect('cadena_de_conexion', { useNewUrlParser: true, useUnifiedTopology: true });