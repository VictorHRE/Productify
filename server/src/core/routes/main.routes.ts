import { Router } from "express";
import { categoriaRouter } from "@/modules";
import { authRouter } from "@/modules";

const router = Router();

router.use("/api/categoria", categoriaRouter);
router.use("/api/auth", authRouter);

export default router;
