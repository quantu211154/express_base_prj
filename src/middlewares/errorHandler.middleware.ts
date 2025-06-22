import { NextFunction, Request, Response } from 'express'

export interface AppError extends Error {
  status: number
}

export function globalErrorHandler(err: AppError, req: Request, res: Response, next: NextFunction) {
  res.status(err.status || 500).json({
    sucess: false,
    status: err.status,
    message: err.message || 'Internal Server Error',
    stack: err.stack,
  })
}
