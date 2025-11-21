import express from "express";
import { registerUser, loginUser } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify", protect, (req: any, res) => {
    res.json({ valid: true, user: req.user });
});

export default router;
