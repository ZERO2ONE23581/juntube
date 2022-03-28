import MongoStore from "connect-mongo";
import express from "express";
import session from "express-session";
import morgan from "morgan";
import { localsMiddleware } from "../middleware";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Hello",
    resave: true,
    saveUninitialized: true,
    //아래 코드가 없으면 서버가 재시작할때 세션은 지워짐 (원래 세션은 메모리에 저장되기때문)
    //connect-mongo를 설치하면 session이 mongodb에 저장되어서 서버가 꺼져도 데이터가 저장되어 브라우저가 항상 기억하게 됨!
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/juntube" }),
  })
);

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
