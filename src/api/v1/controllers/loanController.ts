import { Request, Response } from "express";

export const createLoan = (req: Request, res: Response) => {
  res.json({ message: "Loan created (mock response)" });
};

export const getLoans = (req: Request, res: Response) => {
  res.json({ message: "All loans (mock response)" });
};

export const getLoanById = (req: Request, res: Response) => {
  res.json({ message: `Loan ${req.params.id} details (mock response)` });
};

export const approveLoan = (req: Request, res: Response) => {
  res.json({ message: `Loan ${req.params.id} approved (mock response)` });
};

export const reviewLoan = (req: Request, res: Response) => {
  res.json({ message: `Loan ${req.params.id} reviewed (mock response)` });
};