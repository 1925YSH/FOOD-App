import express from 'express'
import { addToCart, getCart, removeFromCart } from '../controllers/cartController.js'
import authMiddleware from '../middlewares/auth.js';


const cartRouter = express.Router();

//route to add in cart
cartRouter.post("/add",authMiddleware,addToCart)

//route to remove from cart

cartRouter.post("/remove",authMiddleware,removeFromCart)

//route to get cart data
cartRouter.post("/get",authMiddleware,getCart)

export default cartRouter;