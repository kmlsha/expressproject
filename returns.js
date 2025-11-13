import { Router } from "express";
import { refundView } from "./refundFunction.js";
import { authenticate } from "./auth.js";

const orderreturnRouter = Router();

orderreturnRouter.get("/refund", authenticate, refundView);

export { orderreturnRouter };
