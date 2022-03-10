import express from "express";
import logger from "morgan";
import rootRouter from "./src/routers/rootRouter";
import userRouter from "./src/routers/userRouter";
import videoRouter from "./src/routers/videoRouter";

const app = express();
const morganMiddleware = logger("dev");
app.use(morganMiddleware);
//morgan is request logger middleware for NodeJS.

app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Juntube server is on the port ${PORT} 🔥`));
