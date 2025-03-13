import mongoose, { Schema } from "mongoose";
type FoodSchematype = {
  foodName: String;
  price: number;
  image: string;
  ingredients: string;
  category: string;
};
const FoodSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: { 
       type: Schema.Types.ObjectId,
       href: "FoodCategory",
       required: true },
  },
  { timestamps: true }
);
export default mongoose.model<FoodSchematype>(
  "food",
  FoodSchema
);
