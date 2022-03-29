import express from "express";
import { deleteUser, getEdit, postEdit } from "../controllers/userController";
const userRouter = express.Router();

userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.route("/delete").get(deleteUser);

export default userRouter;
