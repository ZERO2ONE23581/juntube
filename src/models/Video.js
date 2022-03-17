import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, uppercase: true },
  description: { type: String, required: true, trim: true },
  createdAt: { type: Date, required: true, default: Date.now },
  meta: {
    views: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
  },
  hashtags: [{ type: String }],
});

videoSchema.static("createHashtags", function (hashtags) {
  return hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word} `));
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
