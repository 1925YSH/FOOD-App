//Fist we create one basic express server

import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRout.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config
const app = express()

const port = process.env.PORT || 4000;

//middleware
app.use(express.json())  //data which we gets from frontend to backend are converted into json

//allows to communicate backend and frontend
app.use(cors({
  origin: ["https://food-app-blush-eight.vercel.app"], // Tumhara frontend ka deployed URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

//db Connection

connectDB();

//API end point
app.use("/api/food",foodRouter);  //this API is to add food items in DB

app.use("/images",express.static('uploads')); //this api is used to store image in the folder

app.use("/api/user",userRouter); //this api is used for user registeration and login

app.use("/api/cart",cartRouter); //this api is used to add items in cart

app.use("/api/order/",orderRouter);//this api is used to place order




app.get("/",(req,res)=>{
        res.send("API IS WORKING")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    
})

