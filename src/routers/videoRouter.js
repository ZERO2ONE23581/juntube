import express from "express";
import {
  createVideo,
  deleteVideo,
  editVideo,
  watchVideo,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.route("/create").get(createVideo);
videoRouter.route("/").get(watchVideo);
videoRouter.route("/edit").get(editVideo);
videoRouter.route("/delete").get(deleteVideo);

export default videoRouter;
