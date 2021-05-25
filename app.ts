import express from "express";
import * as http from "http";
import cors from "cors";
import { CommonRoutesConfig } from "./common/common.routes.config";
import { ParseRoutes } from "./parse/parse.routes.config";

// server settings
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
// we use this array to keep a list of routes
const routes: Array<CommonRoutesConfig> = [];

// treat all request as json
app.use(express.json());
// allow access from any domain name
app.use(cors());

// add our parser router
routes.push(new ParseRoutes(app));

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
