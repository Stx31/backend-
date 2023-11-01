const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  text: String,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
