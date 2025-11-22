import { Request, Response, NextFunction } from "express";
import { auth } from "../../../config/firebaseConfig";

export const getUserDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await auth.getUser(req.params.uid);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};