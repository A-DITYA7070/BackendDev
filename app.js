import express from "express";
import dotenv from "dotenv";

const app=express();

// connecting to db
import  connectTODB from "./config/database.js";

connectTODB();

// using middlewaress.
app.use(express.json());

import taskRoutes from "./routes/taskRoutes.js";

app.use("/api/v1",taskRoutes);

// configuring dotenv..
dotenv.config({path:"./config/config.env"});

app.use(express.json());


export default app;
