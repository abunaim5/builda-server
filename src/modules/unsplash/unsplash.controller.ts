import { Request, Response } from 'express';
import { UnsplashService } from './unsplash.service';

export const getRandomImagesController = async (_req: Request, res: Response) => {
    try {
        const images = await UnsplashService.getRandomImages();
        res.status(200).json({ images: images });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch images' });
    };
};