import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { required: true, type: String, unique: true },
  username: { required: true, type: String, unique: true },
  password: { required: true, type: String },
  name: { required: true, type: String },
  location: { type: String },
});

const User = mongoose.model("User", userSchema);
export default User;
