import mongoose, { Schema } from "mongoose";
type FoodCategorySchematype = {
  categoryName: String;
};
const FoodCategorySchema: Schema = new Schema(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model<FoodCategorySchematype>(
  "FoodCategory",
  FoodCategorySchema
);
