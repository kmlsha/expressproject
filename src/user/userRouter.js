import { Router } from "express";
import { userAdd, userEdit } from "./userFunction.js";
import { authenticate } from "../auth.js";

const userRouter = Router();

userRouter.post("/add", authenticate, userAdd);

userRouter.post("/edit", authenticate, userEdit);

export { userRouter };
