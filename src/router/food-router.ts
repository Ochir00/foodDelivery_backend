import { Router } from "express";
import { getfooddata, postfooddata } from "../controller/food.controller";
const foodrouter = Router();

foodrouter.get("/", getfooddata);
foodrouter.post("/", postfooddata);
export default foodrouter;