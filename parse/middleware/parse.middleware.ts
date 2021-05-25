// to add types to the req and res objects
import express from "express";

class ParseMiddleware {
  validate(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (!req.body?.data) {
      res.status(400).send({
        error: "Missing required 'data' field",
      });
    } else if (req.body.data.length !== 25) {
      res.status(400).send({
        error: "'data' field length must be 25 characters",
      });
    } else {
      next();
    }
  }
}

export default new ParseMiddleware();
