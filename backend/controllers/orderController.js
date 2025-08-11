import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
//Placing user order from frontend
const placeOrder = async (req, resp) => {
    // ✅ Change this for production or local
    const frontend_url = process.env.FRONTEND_URL || "http://localhost:5173"; 

    try {
        // 1️⃣ Save order to DB
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });
        await newOrder.save();

        // 2️⃣ Clear user's cart
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // 3️⃣ Create Stripe line items
        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }));

        // 4️⃣ Add delivery charge
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: 16000 // 2 * 100 * 80 (₹160)
            },
            quantity: 1
        });

        // 5️⃣ Create Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        // 6️⃣ Send back session URL to frontend
        resp.json({ success: true, session_url: session.url });

    } catch (error) {
        console.error("Error in placeOrder:", error);
        resp.json({ success: false, message: "Something went wrong while placing the order." });
    }
};

const verifyOrder =async(req,resp)=>{
        const {orderId,success}=req.body;
        try {
            if (success=="true") {
                await orderModel.findByIdAndUpdate(orderId,{payment:true});
                resp.json({success:true,message:"Paid"})
            }else{
                await orderModel.findByIdAndDelete(orderId);
                resp.json({success:false,message:"Not Paid"})
            }
        } catch (error) {
            console.log(error);
            resp.json({success:false,message:"Error"})
            
        }
}

//user order for frontend

const userOrders =async (req,resp) =>{

        try {
            const orders = await orderModel.find({userId:req.body.userId});
            resp.json({success:true,data:orders})

        } catch (error) {
            console.log();
            resp.json({success:false,message:"Error"})
            
        }
}
 
//list of orders for admin panel

    const listOrders = async(req,resp)=>{
            try {
                
                const orders = await orderModel.find({});
                resp.json({success:true,data:orders})
            } catch (error) {
                console.log(error);
                resp.json({success:false,message:"Error"})
                
            }
    }

//updating the order status
    const updateStatus =async (req,resp)=>{

        try {
            await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
            resp.json({success:true,message:"Status Updated"})
        } catch (error) {
            console.log(error);
            resp.json({success:false,message:"Error"})
            
        }

    }

export {placeOrder,verifyOrder ,userOrders,listOrders ,updateStatus}
