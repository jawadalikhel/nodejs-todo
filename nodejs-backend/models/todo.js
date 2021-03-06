const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  note: String,
  createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Todo', todoSchema);