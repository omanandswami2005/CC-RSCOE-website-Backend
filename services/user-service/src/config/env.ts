import dotenv from "dotenv";
dotenv.config();

export default {
  USER_PORT: process.env.USER_PORT || 5002,
};
