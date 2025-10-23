import { Request, Response } from 'express';
import { AiService } from './ai.service';

export const AiController = {
    generateImage: async (req: Request, res: Response) => {
        const prompt = req.body;
        const output = await AiService.generateImage(prompt);
        res.json({ result: output });
    }
};