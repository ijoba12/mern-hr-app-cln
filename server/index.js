import express from "express";
import dotenv from "dotenv";
import { connect } from "./lib/db.js";

const app = express();

const port = 4040;
dotenv.config();

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "server is live" });
});

app.use((req, res) => {
  res.status(404).json({ success: false, errMsg: "route not found" });
});

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`http://localhost:${port}`);
      });
    } catch (error) {
      console.log("can not connect to server" + error.message);
    }
  })
  .catch((error) => {
    console.log("invalid database connection" + error.message);
  });