import { Router } from "express";
import { deletefooddata, getfooddata, postfooddata } from "../controller/food.controller";
const foodrouter = Router();

foodrouter.get("/", getfooddata);
foodrouter.post("/", postfooddata);
foodrouter.delete("/", deletefooddata);
export default foodrouter;