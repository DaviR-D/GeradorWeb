"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

require("reflect-metadata");

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

require("../../container");

var _path = _interopRequireDefault(require("path"));

var _AppError = require("../../errors/AppError");

var _typeorm = _interopRequireDefault(require("../typeorm"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _typeorm.default)();
const app = (0, _express.default)();
exports.app = app;
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.router);
app.use((err, request, response, next) => {
  if (err instanceof _AppError.AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  });
});
app.use("/user/avatar", _express.default.static(_path.default.join(__dirname, "..", "..", "..", "..", "tmp", "avatar")));
app.use("/questions/images", _express.default.static(_path.default.join(__dirname, "..", "..", "..", "..", "tmp", "questionImages")));