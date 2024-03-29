import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "@shared/container";
import path from "path";

import { AppError } from "@shared/errors/AppError";
import createConnection from "@shared/infra/typeorm";

import cors from "cors";

import { router } from "./routes";

createConnection();
const app = express();
app.use(cors());

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.use(
  "/user/avatar",
  express.static(path.join(__dirname, "..", "..", "..", "..", "tmp", "avatar"))
);

app.use(
  "/questions/images",
  express.static(
    path.join(__dirname, "..", "..", "..", "..", "tmp", "questionImages")
  )
);

app.use(
  "/items/images",
  express.static(
    path.join(__dirname, "..", "..", "..", "..", "tmp", "itemImages")
  )
);

app.use(
  "/achievements/images",
  express.static(
    path.join(__dirname, "..", "..", "..", "..", "tmp", "achievementImages")
  )
);

export { app };
