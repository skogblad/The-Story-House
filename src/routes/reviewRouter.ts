import express from "express";
import { createReview, deleteReview, fetchAllReviews, fetchReview, updateReview } from "../controller/reviewController";

const router = express.Router()

router.get("/", fetchAllReviews)
router.get("/:id", fetchReview)

// The 3 endpoints below are protected
router.post("/", createReview)
router.patch("/:id", updateReview)
router.delete("/:id", deleteReview)

export default router;