import express from "express";
import proxy from "express-http-proxy";  // Import express-http-proxy
import config from "../config/env";     // Assuming you have a config file for your URLs

const router = express.Router();

// Proxy requests to the Auth Service

router.use("/api/auth", proxy(config.AUTH_SERVICE_URL,
    {
        proxyErrorHandler: (err, res, next) => {
          console.error("Proxy Error:", err);
          res.status(500).json({ message: "Something went wrong while contacting the Auth Service" });
        },
        proxyReqPathResolver: (req) => {
          // If a request comes to /api/user/profile, rewrite it to /user/profile for the User Service.
          return "/auth" + req.url;
        }
    }
));

// For requests to /api/user, remove the /api prefix so that the User Service sees /user...
router.use("/api/user", proxy(config.USER_SERVICE_URL, {
  proxyReqPathResolver: (req) => {
    // If a request comes to /api/user/profile, rewrite it to /user/profile for the User Service.
    return "/user" + req.url;
  }
}));

// For team routes: forward /api/team to /team on the User Service.
router.use("/api/team", proxy(config.USER_SERVICE_URL, {
  proxyReqPathResolver: (req) => {
    return "/team" + req.url;
  }
}));

// For general subscription routes: forward /api/general to /general on the User Service.
router.use("/api/general", proxy(config.USER_SERVICE_URL, {
  proxyReqPathResolver: (req) => {
    return "/general" + req.url;
  }
}));

export default router;
