const ParseController = require("./parse.controller").default;

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};
const req = { body: { data: "JOHN0000MICHAEL0009994567" } };

describe("v1 parser", () => {
  test("should 200 with client object", () => {
    const res = mockResponse();
    ParseController.getClient(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      statusCode: 200,
      data: {
        firstName: "JOHN0000",
        lastName: "MICHAEL000",
        clientId: "9994567",
      },
    });
  });
});

describe("v2 parser", () => {
  test("should 200 with formatted client object", () => {
    const res = mockResponse();
    ParseController.getClientFormatted(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      statusCode: 200,
      data: { firstName: "JOHN", lastName: "MICHAEL", clientId: "999-4567" },
    });
  });
});
