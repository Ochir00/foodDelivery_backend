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

export const getgategorydata = async (req: Request, res: Response) => {
  try {
    const allData = await foodCategoruModel.find();
    res.status(200).json( allData );
  } catch (error) {
    res.status(500).json({ messege: "error pzda", error });
  }
};

export const Putcategorydata = async (req: Request, res: Response) => {
   const { id } = req.params;
   const  name = req.body;
  try {
    const allData = await foodCategoruModel.updateOne({ _id : id},name);
    res.status(200).json({ messege: "bolson2", data: allData });
  } catch (error) {
    res.status(500).json({ messege: "error pzda", error });
  }
};

export const deletecategorydata = async (req: Request, res: Response) => {
  const { id } = req.params;
 try {
   const allData = await foodCategoruModel.deleteOne({ _id : id});
   res.status(200).json({ messege: "bolson2", data: allData });
 } catch (error) {
   res.status(500).json({ messege: "error pzda", error });
 }
};

