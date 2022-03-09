import express from "express";

const app = express();

const PORT = 4000;
const handleHome = (req, res) => {
  return res.send("hello");
};

const firstmiddleware = (req, res, next) => {
  console.log("first middleware");
  next();
};
const secondmiddleware = (req, res, next) => {
  console.log("second middleware");
  return res.send("second middleware");
  next();
};

app.get("/", firstmiddleware, secondmiddleware, handleHome);

app.listen(PORT, () => console.log(`✅ This server is on the port ${PORT} 🔥`));
