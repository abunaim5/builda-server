import express from 'express';
import { getRandomImagesController } from './unsplash.controller';

const router = express.Router();
router.get('/images', getRandomImagesController);

export default router;