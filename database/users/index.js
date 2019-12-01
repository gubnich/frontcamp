const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
});

const DB_users = mongoose.model('users', userSchema);

module.exports = DB_users;