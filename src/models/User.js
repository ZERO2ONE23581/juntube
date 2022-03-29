import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: { required: true, type: String, unique: true },
  username: { required: true, type: String, unique: true },
  password: { required: true, type: String },
  name: { required: true, type: String },
  location: { type: String },
  avatarUrl: { type: String },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User;
