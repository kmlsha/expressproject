import { Router } from "express";
import { orderAdd, orderEdit, orderView } from "./orderFunction.js";
import { authenticate } from "./auth.js";

const orderRouter = Router();

orderRouter.post("/add", authenticate, orderAdd);
orderRouter.post("/edit", authenticate, orderEdit);
orderRouter.get("/view", authenticate, orderView);

export { orderRouter };
