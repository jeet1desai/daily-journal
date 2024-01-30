import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name is required"],
  },
  email: {
    type: String,
    require: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  profilePicture: {
    type: String,
    default: "",
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
