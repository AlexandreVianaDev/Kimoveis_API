import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandle.middleware";
import { usersRoutes } from "./routers/users.routes";
import { loginRoutes } from "./routers/login.routes";
import { categoriesRoutes } from "./routers/categories.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", categoriesRoutes);

app.use(errorHandler);

export default app;
