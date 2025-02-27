import express from "express";
import { configDotenv } from "dotenv";
import { connectABC } from "./db/DataBase";
import categoryRouter from "./router/food-category";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser());
configDotenv();
const port = process.env.PORT;
connectABC();

app.use("/createcategoty", categoryRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
