const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  hash: String,
  updated_at: Date,
});

module.exports = userSchema;
