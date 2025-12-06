import express from "express";
import { userRouter } from "./user/userRouter.js";
import { orderRouter } from "./order/orderRouter.js";
import { orderReturnRouter } from "./returnRouter.js";
import { loginFn } from "./auth.js";

const router = express.Router();

// v2 routes
router.use("/v2/login", loginFn);
router.use("/v2/user", userRouter);
router.use("/v2/order", orderRouter);
router.use("/v2/return", orderReturnRouter);

export { router };
