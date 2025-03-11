import { Request, Response } from "express";
import userModul from "../models/user.modul";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userdata = req.body;
    console.log(userdata);
    const newuser = await userModul.create(userdata);
    res.status(200).json({ messege: "bolson2", newuser });
  } catch (error) {
    res.status(500).json({ messege: "error pzda", error });
  }
};
export const getUser = async (req: Request, res: Response) => {
    try {
      const newuser = await userModul.find();
      res.status(200).json({ messege: "bolson2", newuser });
    } catch (error) {
      res.status(500).json({ messege: "error pzda", error });
    }
  };
  export const putUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const newuser = await userModul.updateOne({ _id : id},req.body);
      res.status(200).json({ messege: "bolson2", newuser });
    } catch (error) {
      res.status(500).json({ messege: "error pzda", error });
    }
  };
  export const deleteuser = async (req: Request, res: Response) => {
    const {id }= req.params;
    try {
      const newuser = await userModul.deleteOne({ _id : id});
      res.status(200).json({ messege: "bolson2", newuser });
    } catch (error) {
      res.status(500).json({ messege: "error pzda", error });
    }
  };