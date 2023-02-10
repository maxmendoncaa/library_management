import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { bookRoute } from "./routes/bookRoute.js";
import { db } from "./models/db.js"
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/book", bookRoute);


async function initApp() {
  await db.authenticate()
  await db.sync()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

initApp()
