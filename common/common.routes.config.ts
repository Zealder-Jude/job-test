import express from "express";

export abstract class CommonRoutesConfig {
  app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
    this.configureRoutes();
  }

  // function that all class that extends this class must provide
  abstract configureRoutes(): express.Application;
}
