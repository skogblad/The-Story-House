import express from "express";
import { fetchAllReviews } from "../controller/reviewController";

const router = express.Router()

router.get("/", fetchAllReviews)
router.get("/:id")

// The 3 endpoints bleow are protected
router.post("/")
router.patch("/:id")
router.delete("/:id")

export default router;