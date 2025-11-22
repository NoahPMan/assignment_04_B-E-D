import { Request, Response, NextFunction } from "express"
import { auth } from "../../../config/firebaseConfig"

export const setUserRole = async (req: Request, res: Response, next: NextFunction) => {
  const { uid, role } = req.body
  try {
    await auth.setCustomUserClaims(uid, { role })
    res.status(200).json({ message: `Role '${role}' assigned to user ${uid}` })
  } catch (error) {
    next(error)
  }
}