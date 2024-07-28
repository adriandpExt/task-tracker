import express from "express";

import cors from "cors";
import bodyParser from "body-parser";
import connectionString from "./db/connection";

import taskRouter from "./routes/taskRoutes";
import authRouter from "./routes/authRoutes";
import taskAssignmentRouter from "./routes/taskAssignment";
import commonRouter from "./routes/commonRoutes";

import { errorHandler } from "./utils/errorHandler";
import tokenValidate from "./utils/tokenValidate";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", authRouter);
app.use("/api", tokenValidate, taskRouter);
app.use("/api", tokenValidate, taskAssignmentRouter);
app.use("/api", tokenValidate, commonRouter);

app.use(errorHandler);

connectionString.on("connect", () => {
  app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
});
