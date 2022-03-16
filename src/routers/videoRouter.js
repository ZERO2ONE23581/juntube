import express from "express";
import {
  createVideo,
  watchVideo,
  getEdit,
  postEdit,
  deleteVideo,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.route("/create").get(createVideo);
videoRouter.route("/:id").get(watchVideo);
videoRouter.route("/:id/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id/delete").get(deleteVideo);

export default videoRouter;
