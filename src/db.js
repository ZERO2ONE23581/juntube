import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.log("❌ DB Error", error)); //on can happen many times
db.once("open", () => console.log(`✅ Connected to Database!🔥`)); //this runs only once
