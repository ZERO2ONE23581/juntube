import express from "express";
import {
  getEdit,
  postEdit,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import { loggedInUserOnly, uploadFile } from "../middleware";

const userRouter = express.Router();

userRouter
  .route("/edit")
  .all(loggedInUserOnly)
  .get(getEdit)
  .post(uploadFile.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(loggedInUserOnly)
  .get(getChangePassword)
  .post(postChangePassword);

export default userRouter;
