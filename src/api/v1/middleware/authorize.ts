import { Request, Response, NextFunction } from "express"
import { AuthorizationError } from "../errors/errors"
import { getErrorMessage, getErrorCode } from "../utils/errorUtils"

interface AuthorizationOptions {
  allowedRoles: string[]
  allowSameUser: boolean
}

const authorize = (options: AuthorizationOptions) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const uid = res.locals.uid
      const role = res.locals.role

      if (!role) {
        throw new AuthorizationError("Forbidden: No role assigned", "ROLE_NOT_FOUND")
      }

      if (options.allowSameUser && req.params.id === uid) {
        return next()
      }

      if (!options.allowedRoles.includes(role)) {
        throw new AuthorizationError("Forbidden: Insufficient role", "INSUFFICIENT_ROLE")
      }

      next()
    } catch (error: unknown) {
      if (error instanceof AuthorizationError) {
        next(error)
      } else if (error instanceof Error) {
        next(new AuthorizationError(`Forbidden: ${getErrorMessage(error)}`, getErrorCode(error)))
      } else {
        next(new AuthorizationError("Forbidden: Authorization failed", "AUTHORIZATION_FAILED"))
      }
    }
  }
}

export default authorize