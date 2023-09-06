import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app=express();

// connecting to db
import  connectTODB from "./config/database.js";

connectTODB();

// using middlewaress.
app.use(express.json());
// app.use(cors);

// implementing routes...
import product from "./routes/productRoutes.js";

app.use("/api/v1",product);


// configuring dotenv..
dotenv.config({path:"./config/config.env"});

app.use(express.json());


export default app;
