var mongoose = require('mongoose');

exports.i_school_person = mongoose.Schema({
  name: String,
  position: String,
  x: Number,
  y: Number,
  z: Number,
  delegate: Boolean
});
