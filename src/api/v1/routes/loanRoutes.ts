import express from "express";
import {
  createLoan,
  getLoans,
  getLoanById,
  approveLoan,
  reviewLoan,
} from "../controllers/loanController";

const router = express.Router();

router.post("/", createLoan);
router.get("/", getLoans);
router.get("/:id", getLoanById);
router.put("/:id/approve", approveLoan);
router.post("/:id/review", reviewLoan);

export default router;