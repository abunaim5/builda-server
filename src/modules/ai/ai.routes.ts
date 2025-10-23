import express from 'express';
import { AiController } from './ai.controller';

const router = express.Router();

router.post('/generate', AiController.generateImage);

export default router;