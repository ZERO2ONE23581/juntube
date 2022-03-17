import express from "express";
import {
  getUpload,
  watchVideo,
  getEdit,
  postEdit,
  deleteVideo,
  postUpload,
  searchVideo,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.route("/:id([0-9a-f]{24})").get(watchVideo);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/search").get(searchVideo);

export default videoRouter;
