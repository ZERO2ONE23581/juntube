import express from "express";
import { deleteUser, getEdit, postEdit } from "../controllers/userController";
import { loggedInUserOnly } from "../middleware";
const userRouter = express.Router();

userRouter.route("/edit").all(loggedInUserOnly).get(getEdit).post(postEdit);
userRouter.route("/delete").get(deleteUser);

//로그인된 유저만 -> 프로필 수정

export default userRouter;
