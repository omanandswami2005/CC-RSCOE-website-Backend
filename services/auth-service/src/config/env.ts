import dotenv from "dotenv";
dotenv.config();

export default {
  AUTH_PORT: process.env.AUTH_PORT || 5001,
};