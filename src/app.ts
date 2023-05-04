import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandle.middleware";
import { usersRoutes } from "./routers/users.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes)

app.use(errorHandler);

export default app;
