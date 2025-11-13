import express from "express";
import { userRouter } from "./userRouter.js";
import { orderRouter } from "./orders.js";
import { orderreturnRouter } from "./returns.js";

const router = express.Router();

// v2 routes
router.use("/v2/user", userRouter);
router.use("/v2/order", orderRouter);
router.use("/v2/return", orderreturnRouter);

export { router };
