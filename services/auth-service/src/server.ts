import app from "./app";
import connectDB from "./config/db";
import config from "./config/env";

connectDB();

app.listen(config.AUTH_PORT, () => {
  console.log(`🚀 Auth Service running on port ${config.AUTH_PORT}`);
});
