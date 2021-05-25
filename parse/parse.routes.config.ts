import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import ParseController from "./controllers/parse.controller";
import ParseMiddleware from "./middleware/parse.middleware";

export class ParseRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app);
  }

  configureRoutes() {
    // v1 of parser
    this.app
      .route("/api/v1/parse")
      .post(ParseMiddleware.validate, ParseController.getClient);

    // v2 of parser
    this.app
      .route("/api/v2/parse")
      .post(ParseMiddleware.validate, ParseController.getClientFormatted);

    return this.app;
  }
}
