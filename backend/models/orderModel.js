import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, 
            name: String,
            description: String,
            price: Number,
            image: String,
            category: String,
            quantity: Number
        }
    ],
    amount: { type: Number, required: true },
    address: {
        firstName: String,
        lastName: String,
        email: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
        phone: String
    },
    status: { type: String, default: "Food Processing" },
    date: { type: Date, default: Date.now },
    payment: { type: Boolean, default: false }
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
