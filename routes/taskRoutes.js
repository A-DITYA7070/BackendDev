import {createTask} from "../controllers/taskManager.js";

import express from "express";

const router=express.Router();

router.route('/createTask').post(createTask);

export default router;