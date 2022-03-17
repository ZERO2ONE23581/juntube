import express from "express";
import { home } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.route("/").get(home);

export default rootRouter;
