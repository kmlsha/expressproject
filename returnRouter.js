import { Router } from "express";
import { refundView } from "./refundFunction.js";
import { authenticate } from "./auth.js";

const orderreturnRouter = Router();

orderreturnRouter.get("/refund/status", authenticate, refundView);

export { orderreturnRouter };

// t9EZaiwC1oPpqvZL
