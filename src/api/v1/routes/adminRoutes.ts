import express from "express";
import { setUserRole } from "../controllers/adminController";

const router = express.Router();

router.post("/set-role", setUserRole);

export default router;