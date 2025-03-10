import mongoose, { Schema } from "mongoose";
type FoodOrderSchematype = {
  foodName: String;
  price: number;
  image: string;
  ingredients: string;
  category: string;
};
const FoodOrderSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model<FoodOrderSchematype>(
  "FoodOrder",
  FoodOrderSchema
);
