import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL!,
  USER_SERVICE_URL: process.env.USER_SERVICE_URL!,
  // EVENT_SERVICE_URL: process.env.EVENT_SERVICE_URL!,
  // CONTENT_SERVICE_URL: process.env.CONTENT_SERVICE_URL!,
  // PROJECT_SERVICE_URL: process.env.PROJECT_SERVICE_URL!,
  // JWT_SECRET: process.env.JWT_SECRET!,
};
