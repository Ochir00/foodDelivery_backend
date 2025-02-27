import { Request, Response } from "express";
import foodCategoruModel from "../models/foodCategoru.model";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    console.log(categoryData);
    const newcategory = await foodCategoruModel.create(categoryData);
    res.status(200).json({ messege: "bolson2", newcategory });
  } catch (error) {
    res.status(500).json({ messege: "error pzda", error });
  }
};
export const getdata = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ messege: "bolson2" });
  } catch (error) {
    res.status(500).json({ messege: "error pzda", error });
  }
};
