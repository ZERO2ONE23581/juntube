import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  createdAt: Date,
  meta: { views: Number, rating: Number },
  hashtags: [{ type: String }],
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
