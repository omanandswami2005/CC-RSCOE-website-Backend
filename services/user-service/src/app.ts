import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoutes from "./routes/userRoutes";
import teamRoutes from "./routes/teamRoutes";
import generalRoutes from "./routes/generalRoutes";;
import { requestLogger } from '../../../shared/src/utils/logger';

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

app.use("/user", userRoutes);
app.use("/team", teamRoutes);
app.use("/general", generalRoutes);

export default app;
