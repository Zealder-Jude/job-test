const { ParseRoutes } = require("./parse.routes.config");

const mockApp = () => {
  const app = {};
  app.route = jest.fn().mockReturnValue(app);
  app.post = jest.fn().mockReturnValue(app);
  return app;
};

test("both version of api routes", () => {
  const app = mockApp();
  new ParseRoutes(app);
  expect(app.route).toHaveBeenCalledWith("/api/v1/parse");
  expect(app.route).toHaveBeenCalledWith("/api/v2/parse");
  expect(app.post).toHaveBeenCalledTimes(2);
});
