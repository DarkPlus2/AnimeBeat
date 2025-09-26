const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  avatar: String,
  watchlist: [Number] // MAL IDs
});

module.exports = mongoose.model("User", UserSchema);
