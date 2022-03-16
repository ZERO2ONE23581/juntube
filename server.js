import express from "express";
import morgan from "morgan";
import rootRouter from "./src/routers/rootRouter";
import userRouter from "./src/routers/userRouter";
import videoRouter from "./src/routers/videoRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const PORT = 4004;
app.listen(PORT, () => console.log(`✅ Juntube server is on the port ${PORT} 🔥`));
