import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/userController";import { authMiddleware } from "../../../../shared/src/middleware/authMiddleware";

const router = Router();

router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);


export default router;
