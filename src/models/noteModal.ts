import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "title is required"],
  },
  content: {
    type: String,
    require: [true, "content is required"],
    unique: true,
  },
  user: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.models.notes || mongoose.model("notes", noteSchema);

export default Note;
