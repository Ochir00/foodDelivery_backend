import { Request, Response } from "express";
import foodModel from "../models/food.model";

export const getfooddata = async (req: Request, res: Response) => {
    const { id }= req.params;
  try {
    const allData = await foodModel.find({ _id : id});
    res.status(200).json({ messege: "bolson2", data: allData });
  } catch (error) {
    res.status(500).json({ messege: "error pzda", error });
  }
};
export const postfooddata = async (req: Request, res: Response) => {
  try {
    const newfood = await foodModel.create(req.body);
    res.status(200).json({ messege: "bolson2", data: newfood });
  } catch (error) {
    res.status(500).json({ messege: "error pzda", error });
  }
};
export const putfooddata = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
     const newfood = await foodModel.updateOne({ _id : id},req.body);
      res.status(200).json({ messege: "bolson2", data: newfood });
    } catch (error) {
      res.status(500).json({ messege: "error pzda", error });
    }
  };
export const deletefooddata = async (req: Request, res: Response) => {
  const { id } = req.params;
 try {
   const deleteData = await foodModel.deleteOne({ _id : id});
   res.status(200).json({ messege: "bolson2", data: deleteData });
 } catch (error) {
   res.status(500).json({ messege: "error pzda", error });
 }
};

