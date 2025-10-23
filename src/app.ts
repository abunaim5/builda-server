import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import unsplashRoutes from './modules/unsplash/unsplash.routes';
import aiRoutes from './modules/ai/ai.routes';
import { globalErrorHandler } from './middleware/errorHandler';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/unsplash', unsplashRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (_, res) => {
    res.send('Builda Server API is running!');
});

app.use(globalErrorHandler);

export default app;