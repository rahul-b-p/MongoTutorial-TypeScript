import { Request, Response, NextFunction } from 'express';
import { ensureIndexCreated } from '../utils/indexManager';

export const ensureAgeIndex = async (
    req: Request<{ age: string }>,
    res: Response,
    next: NextFunction
) => {
    try {
        const age = Number(req.params.age);

        if (isNaN(age)) {
            res.status(400).json({ message: 'Invalid age parameter' });
            return;
        }

        await ensureIndexCreated();
        next();
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
};