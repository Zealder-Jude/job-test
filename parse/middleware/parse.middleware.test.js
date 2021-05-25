const ParseMiddleware = require("./parse.middleware").default;

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe("parser validate middileware", () => {
  test("should 400 missing data", () => {
    const res = mockResponse();
    const req = { body: {} };
    const mockNext = jest.fn();
    ParseMiddleware.validate(req, res, mockNext);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(mockNext).toHaveBeenCalledTimes(0);
  });

  test("should 400 data wrong length", () => {
    const res = mockResponse();
    const req = { body: {data: "JOHN0000M09994567"} };
    const mockNext = jest.fn();
    ParseMiddleware.validate(req, res, mockNext);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(mockNext).toHaveBeenCalledTimes(0);
  });

  test("should call next", () => {
    const res = mockResponse();
    const req = { body: {data: "JOHN0000MICHAEL0009994567"} };
    const mockNext = jest.fn();
    ParseMiddleware.validate(req, res, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
  });
});
