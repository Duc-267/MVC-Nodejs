import route from "./routes/index.js";
import express from "express";
import bodyParser from "body-parser";
import { connectDatabase } from "./database/index.js";
import multer from "multer";

const app = express();
const hostname = "127.0.0.1";
const port = 3000;
//Connect to db
connectDatabase();

// SET STORAGE

// parse json
app.use(bodyParser.json())
app.use(bodyParser.text());


route(app)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
