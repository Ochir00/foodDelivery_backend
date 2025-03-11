import mongoose, { Schema } from "mongoose";
type FoodOrderSchematype = {
  foodName: String;
  price: number;
  image: string;
  ingredients: string;
  category: string;
  status: "PENDING" | "CANCELED" | "DELIVERED";
};
const FoodOrderSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: { type: String, required: true },
    role: {type:["PENDING", "CANCELED","DELIVERED"]}
  },
  { timestamps: true }
);
export default mongoose.model<FoodOrderSchematype>(
  "FoodOrder",
  FoodOrderSchema
);
