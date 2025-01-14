import mongoose from "mongoose";

// Correct schema definition
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  image:{
type:String,
default:"",
  },
  isAdmin: {
    type: Number,
    default: 1,
  },
  token: {
    type: String,
  },
  loginTime: {
    type: Number,
  },
});

// Create a model from the schema
const User = mongoose.model("USER", userSchema);

export default User;
