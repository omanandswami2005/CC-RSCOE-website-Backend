import app from "./app";
import config from "./config/env";

app.listen(config.PORT, () => {
  console.log(`🚀 API Gateway running on port ${config.PORT}`);
});
