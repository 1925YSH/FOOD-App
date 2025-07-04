import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
      "mongodb+srv://yashraj:11223344@cluster0.m5akk.mongodb.net/food-del")
    .then(() => console.log("DB Connected"));
};
