import { Request, Response, NextFunction } from "express"

export const globalErrorHandler = (err: any, _: Request, res: Response, __: NextFunction) => {
    console.error('Error:', err.message);
    res.status(500).json({ message: err.message || 'Internal server error' });
};