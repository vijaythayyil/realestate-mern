import express from "express";
import { test as test1 } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", test1);

export default router;
