const mongoose = require("mongoose");
var bcryptjs = require("bcryptjs");
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  var hash = bcryptjs.hashSync(this.password, 8);
  this.password = hash;
  return next();
});


module.exports = mongoose.model("user", UserSchema);
