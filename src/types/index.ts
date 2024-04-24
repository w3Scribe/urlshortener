import  { Request, Response, NextFunction } from "express"
import { HttpError } from "http-errors"

// Express 
export interface IExpressRequest {
  (req: Request, res: Response, next: NextFunction): void
}

export interface IExpressRequestAsync {
  async (req: Request, res: Response, next: NextFunction): Promise<unknown>
}

export interface IGlobalError {
  (err: HttpError, req: Request, res: Response, next: NextFunction): void
}
