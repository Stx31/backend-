const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/data', (req, res) => {
  res.json({ message: 'conectado al backen ;D' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});