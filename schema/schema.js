var mongoose = require('mongoose');

exports.ISchooler = mongoose.Schema({
  name: String,
  position: String,
  x: Number,
  y: Number,
  z: Number,
  delegate: Boolean
});
