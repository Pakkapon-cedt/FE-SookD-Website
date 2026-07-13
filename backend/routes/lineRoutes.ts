import { Router } from "express";
import { paymentLine, webhook } from "../controllers/lineController";

const router = Router();

router.post("/webhook",webhook);
router.post("/payment", paymentLine);
// router.get("/line",webhook);

export default router;