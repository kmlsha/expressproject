
import { Router } from 'express';
import { orderView } from './userFunction.js';
import { authenticate } from './auth.js';

const orderRouter = Router();

orderRouter.get('/add', authenticate,orderView)

export {orderRouter};