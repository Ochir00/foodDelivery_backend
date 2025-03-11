import { Router } from "express";
import { createUser, deleteuser, getUser, putUser } from "../controller/user.controller";
const userrouter = Router();

userrouter.post("/", createUser);
userrouter.get("/", getUser);
userrouter.get("/", putUser);
userrouter.get("/", deleteuser);
export default userrouter;