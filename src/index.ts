import express from "express";
import { configDotenv } from "dotenv";
import { connectABC } from "./db/DataBase";
import categoryRouter from "./router/food-category";
import bodyParser from "body-parser";
import foodrouter from "./router/food-router";
import userrouter from "./router/user.router";
const app = express();
app.use(bodyParser());
configDotenv();
const port = process.env.PORT;
connectABC();


app.use("/foodcategories", categoryRouter);
app.use("/food", foodrouter);
app.use("/user", userrouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
