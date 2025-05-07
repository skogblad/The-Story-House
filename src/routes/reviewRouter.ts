import express from "express";
import { createReview, deleteReview, fetchAllReviews, fetchReview, updateReview } from "../controller/reviewController";
import { verifyAccessToken } from "../middleware/verifyToken";

const router = express.Router()

router.get("/", fetchAllReviews)
router.get("/:id", fetchReview)
router.post("/", createReview)

// The 2 endpoints below are protected
router.patch("/:id",verifyAccessToken, updateReview)
router.delete("/:id", verifyAccessToken, deleteReview)

export default router;