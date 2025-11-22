import express from "express";
import { setUserRole } from "../controllers/adminController";
import { authenticate } from "../middleware/authenticate";
import authorize from "../middleware/authorize";

const router = express.Router();

router.post(
  "/set-role",
  authenticate,
  authorize({ allowedRoles: ["admin"], allowSameUser: false }),
  setUserRole
);

export default router;