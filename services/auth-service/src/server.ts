import app from "./app";
import connectDB from "./config/db";

connectDB();

app.listen(5001, () => {
  console.log(`🚀 Auth Service running on port ${5001}`);
});
