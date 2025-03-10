import { Router } from "express";
import {
  createFoodCategory,
  deletecategorydata,
  getgategorydata,
  Putcategorydata,
} from "../controller/foodCategory.controller";

const category = Router();

category.post("/", createFoodCategory);
category.get("/", getgategorydata);
category.put("/:id", Putcategorydata);
category.delete("/:id", deletecategorydata);
// const products = Router();
// products.post("/", newProduct).get("/", getproduct).get("/:id", getproductbyid).put("/:id", updateProductID).delete("/:id", deleteProductID)
export default category;

