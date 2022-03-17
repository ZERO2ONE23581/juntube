import app from "./server";
import "./db";
import "./models/Video";

const PORT = 9000;
app.listen(PORT, () => console.log(`✅ Juntube server is on the port ${PORT} 🔥`));
