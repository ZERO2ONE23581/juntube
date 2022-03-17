import express from "express";
import { deleteUser, getEdit } from "../controllers/userController";
const userRouter = express.Router();

userRouter.route("/edit").get(getEdit);
userRouter.route("/delete").get(deleteUser);

export default userRouter;
