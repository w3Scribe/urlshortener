import { User } from "@prisma/client";
import { Request, Response, NextFunction } from "express"
import { HttpError } from "http-errors"

// Express 
export interface IExpressRequest {
  (req: Request, res: Response, next: NextFunction): void
}

export interface IExpressRequestAsync {
  (req: Request, res: Response, next: NextFunction): Promise<unknown>;
}

export interface IGlobalError {
  (err: HttpError, req: Request, res: Response, next: NextFunction): void
}

export interface ICreateHistory {
  (user: User, Action: string): Promise<unknown>
}