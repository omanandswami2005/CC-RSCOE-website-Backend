import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import routes from "./routes/index";

const app = express();

// Middleware
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
app.use(morgan("dev"));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Routes
app.use("/", routes);

export default app;
