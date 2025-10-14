import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { globalErrorHandler } from './middleware/errorHandler';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// app.use('/api/users', (req, res) => {
//     res.status(200).json({ status: 'OK', message: 'Find users successfully' })
// });

app.get('/', (_, res) => {
    res.send('Builda Server API is running!');
});

app.use(globalErrorHandler);

export default app;