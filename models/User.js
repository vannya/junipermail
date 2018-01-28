const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  email: String,
  replyTo: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema);
