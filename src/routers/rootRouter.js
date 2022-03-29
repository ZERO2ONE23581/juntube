import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
} from "../controllers/userController";
import { home } from "../controllers/videoController";
import { loggedInUserOnly, loggedOutUserOnly } from "../middleware";

const rootRouter = express.Router();

rootRouter.route("/").get(home);
rootRouter.route("/join").all(loggedOutUserOnly).get(getJoin).post(postJoin);
rootRouter.route("/login").all(loggedOutUserOnly).get(getLogin).post(postLogin);
rootRouter.route("/logout").all(loggedInUserOnly).get(logout);

//로그인아웃 유저만 -> 회원가입, 로그인
//로그인 유저만 -> 로그아웃

export default rootRouter;
