import express from "express";
import { userDelete, userEdit, userJoin, userLogin } from "../controllers/userController";
const userRouter = express.Router();

userRouter.route("/join").get(userJoin);
userRouter.route("/login").get(userLogin);
userRouter.route("/edit").get(userEdit);
userRouter.route("/delete").get(userDelete);

export default userRouter;
