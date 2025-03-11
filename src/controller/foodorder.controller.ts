import { Request, Response } from "express";
import foodCategoruModel from "../models/foodCategoru.model";
import FoodOrderModul from "../models/FoodOrder.modul";

export const createFoodorder = async (req: Request, res: Response) => {
  try {
    const foodorder = req.body;
    console.log(foodorder);
    const newfoodorder = await FoodOrderModul.create(foodorder);
    res.status(200).json({ messege: "bolson2", newfoodorder });
  } catch (error) {
    res.status(500).json({ messege: "error pzda", error });
  }
};
export const getfoodorder= async (req: Request, res: Response) => {
  try {
    const allData = await FoodOrderModul.find();
    res.status(200).json({ messege: "bolson2", data: allData });
  } catch (error) {
    res.status(500).json({ messege: "error pzda", error });
  }
};
export const Putfoodorder = async (req: Request, res: Response) => {
   const { id } = req.params;
  try {
    const allData = await FoodOrderModul.updateOne({ _id : id},req.body);
    res.status(200).json({ messege: "bolson2", data: allData });
  } catch (error) {
    res.status(500).json({ messege: "error pzda", error });
  }
};
export const deletefoodorder = async (req: Request, res: Response) => {
  const { id } = req.params;
 try {
   const allData = await FoodOrderModul.deleteOne({ _id : id});
   res.status(200).json({ messege: "bolson2", data: allData });
 } catch (error) {
   res.status(500).json({ messege: "error pzda", error });
 }
};

