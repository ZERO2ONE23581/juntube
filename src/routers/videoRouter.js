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
import { loggedInUserOnly, uploadFile, videoUploads } from "../middleware";
const videoRouter = express.Router();

//only loggedIn user can upload, watch, edit, delete videos!

videoRouter
  .route("/upload")
  .all(loggedInUserOnly)
  .get(getUpload)
  .post(videoUploads.single("video"), postUpload);
videoRouter.route("/:id([0-9a-f]{24})").get(watchVideo);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(loggedInUserOnly)
  .get(getEdit)
  .post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").all(loggedInUserOnly).get(deleteVideo);
videoRouter.route("/search").get(searchVideo);

export default videoRouter;
