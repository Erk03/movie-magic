const { Schema, model, MongooseError } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    match: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, "Invalid email adress."],
    minLength: [10, "Email should be atleast 10 characters long"],
  },
  password: {
    type: String,
    match: [/^[a-zA-Z0-9]+$/, "Password should be alphanumeric"],
    minLength: 6,
    required: true,
  },
});

userSchema.virtual("rePassword").set(function (value) {
  if (value !== this.password) {
    throw new MongooseError("Passwords must match");
  }
  // this.rePassword = value;
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 12);
  this.password = hash;
});

// userSchema.path("rePassword").validate(function () {
//   return this.password === this.rePassword;
// }, "Password missmatch!");

const User = model("User", userSchema);

module.exports = User;
