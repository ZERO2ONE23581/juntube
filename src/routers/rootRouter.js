import express from "express";
import { handleHome } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.route("/").get(handleHome);

export default rootRouter;
