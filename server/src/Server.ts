import dotenv from "dotenv";
import path from "path";
import { App } from "./App";
import { middlewares } from "./Middlewares";
import fileAnalyseRouter from "./api/FileAnalyse.Router";

dotenv.config();
const PORT = process.env.PORT || "8080";
const apiPath = "/api";
const buildPath = path.join(__dirname, "..", "..", "client", "build");

// Configure App
const app = new App(
  PORT, 
  middlewares,
  [fileAnalyseRouter],
  apiPath,
  buildPath
);

// Start
app.listen();