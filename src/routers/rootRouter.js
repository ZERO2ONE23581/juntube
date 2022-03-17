import express from "express";
import { getJoin, login, postJoin } from "../controllers/userController";
import { home } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.route("/").get(home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(login);

export default rootRouter;
