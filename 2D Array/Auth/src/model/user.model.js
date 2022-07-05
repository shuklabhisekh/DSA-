const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
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

  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

UserSchema.methods.checkpassword = function(password){
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("user", UserSchema);
