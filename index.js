import express from "express";

const app = express();

const PORT = 4000;
const handleHome = (req, res) => {
  return res.send("<h1>Welcome Home</h1>");
};

const logger = (req, res, next) => {
  console.log(`${req.method} + ${req.url}`); //GET + /
  next();
};
const protectMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/private") {
    return res.send("NOT ALLOWED");
  } else {
    console.log("protected");
    next();
  }
};
const appUseMiddleware = (req, res, next) => {
  console.log("This middleware can go any router.");
  // return res.send("put any text after like 'localhost:4000/asdfasdfas'");
  next();
};

//you can go to any route using app.use
//순서가 매우중요한데, 미들웨어는 본인다음의 함수를 실행시킴으로 만약 app.get다음에 app.use(미들웨어)를 실행시키면 뒤에 아무것도 없음으로 use를 썻음에도 서버는 get을 실행시키고 아무것도 받아오지 않는다.
app.use(appUseMiddleware);
app.get("/private", logger, protectMiddleware, handleHome);

app.listen(PORT, () => console.log(`✅ This server is on the port ${PORT} 🔥`));
