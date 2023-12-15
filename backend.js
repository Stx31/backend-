const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let postsGuardados = [];
let autoresGuardados = [];

app.post('/guardarPost', (req, res) => {
    const { author, title, message, dateTime } = req.body;
    if (!autoresGuardados.includes(author)) {
        autoresGuardados.push(author);
    }

    postsGuardados.push({ author, title, message, dateTime });

    res.json({ status: 'Post guardado correctamente' });
});

app.get('/obtenerPosts', (req, res) => {
    res.json({ posts: postsGuardados });
});

app.get('/obtenerAutores', (req, res) => {
    res.json({ autores: autoresGuardados });
});

app.delete('/eliminarAutor', (req, res) => {
    const authorToDelete = req.body.author;

    for (let i = postsGuardados.length - 1; i >= 0; i--) {
        if (postsGuardados[i].author === authorToDelete) {
            postsGuardados.splice(i, 1);
        }
    }

    res.json({ status: 'Autor y mensajes eliminados correctamente' });
});


app.put('/editarPost', (req, res) => {
    const { originalMessage, editedMessage } = req.body;
    const postAEditar = postsGuardados.find(post => post.message === originalMessage);
    if (postAEditar) {
        postAEditar.message = editedMessage;
        res.json({ status: 'Post editado correctamente' });
    } else {
        res.status(404).json({ status: 'Post no encontrado' });
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
        if (password === '123') {
            res.json({ success: true, message: 'Autenticación exitosa' });
        } else {
            res.json({ success: false, message: 'La autenticación falló' });
        }
    } else {
        res.json({ success: false, message: 'Nombre de usuario y contraseña son requeridos' });
    }
});

app.listen(port, () => {
    console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
