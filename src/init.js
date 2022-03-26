import app from "./server";
import "./db";
import "./models/Video";
import "./models/User";

const PORT = 9001;
app.listen(PORT, () => console.log(`✅ Juntube server is on the port ${PORT} 🔥`));
