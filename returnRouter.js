import { Router } from "express";
import { authenticate } from "./auth.js";
import { refundStatus } from "./refundFunction.js";

const orderReturnRouter = Router();

orderReturnRouter.get("/refund", authenticate, refundStatus);

export { orderReturnRouter };

// t9EZaiwC1oPpqvZL
