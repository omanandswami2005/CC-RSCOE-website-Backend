import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT || 5001,
  MONGO_URI: process.env.DB_URI!,
  JWT_SECRET: process.env.JWT_SECRET!,
  TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN!,
  FRONTEND_URL: process.env.FRONTEND_URL!
};