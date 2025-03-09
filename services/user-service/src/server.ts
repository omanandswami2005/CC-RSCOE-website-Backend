import app from "./app";
import connectDB from "./config/db";
import config from "./config/env";

connectDB();

app.listen(5002, () => {
  console.log(`🚀 Auth Service running on port ${5002}`);
});
