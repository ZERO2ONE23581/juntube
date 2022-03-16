import express from "express";
import {
  getUpload,
  watchVideo,
  getEdit,
  postEdit,
  deleteVideo,
  postUpload,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.route("/:id").get(watchVideo);
videoRouter.route("/:id/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id/delete").get(deleteVideo);

export default videoRouter;
