import { Router } from "express";
import {
  createFoodCategory,
  getdata,
} from "../controller/foodCategory.controller";

const category = Router();

category.post("/", createFoodCategory);
category.get("/", getdata);
// const products = Router();
// products.post("/", newProduct).get("/", getproduct).get("/:id", getproductbyid).put("/:id", updateProductID).delete("/:id", deleteProductID)
export default category;
