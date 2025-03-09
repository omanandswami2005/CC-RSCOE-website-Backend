import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes';
import { requestLogger } from '../../../shared/src/utils/logger';

import errorHandler from '../../../shared/src/middleware/errorHandler';


const app = express();

app.use(requestLogger);

app.use(cors(
    {
        origin: "https://codingclubrscoe.onrender.com",  // Allow requests from your frontend
    credentials: true,  // Allow cookies and authentication headers
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
    }
));
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.use("/auth", authRoutes);

app.use(errorHandler);

export default app;
