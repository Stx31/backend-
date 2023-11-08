const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/login', async (req, res) => {
    return res.send("login")
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
