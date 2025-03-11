import mongoose, { Schema } from "mongoose";
type userSchematype = {
  email: string;
  password: number;
  phoneNumber: string;
  address: string;
  role: "USER" | "ADMIN";
  orderedFoods: string;
  ttl: Date;
  isVerified: boolean;
};
const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: { type: ["USER", "ADMIN"] },
    orderedFoods: { type: String, required: true },
    isVerified: { type: String, required: true },
    ttl: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model<userSchematype>("user", UserSchema);
