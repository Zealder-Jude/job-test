// to add types to the req and res objects
import express from "express";

interface Client {
  firstName: string;
  lastName: string;
  clientId: string;
}

class ParseController {
  getClient = (req: express.Request, res: express.Response) => {
    const data = this.parseDataString(req.body.data);
    res.status(200).send({ statusCode: 200, data: data });
  };

  getClientFormatted = (req: express.Request, res: express.Response) => {
    const data = this.parseDataString(req.body.data);
    // strip zero padding
    data.firstName = data.firstName.replace(/0*$/g, "");
    data.lastName = data.lastName.replace(/0*$/g, "");
    data.clientId = data.clientId.slice(0, 3) + "-" + data.clientId.slice(3);
    res.status(200).send({ statusCode: 200, data: data });
  };

  parseDataString(data: string): Client {
    return {
      firstName: data.slice(0, 8),
      lastName: data.slice(8, 18),
      clientId: data.slice(18),
    };
  }
}

export default new ParseController();
