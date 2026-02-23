const express = require("express");
const router = express.Router();

const {
  createHighlight,
  getAllHighlights,
  getSingleHighlight,
  updateHighlight,
  deleteHighlight
} = require("../controllers/highlightController");

router.post("/", createHighlight);
router.get("/", getAllHighlights);
router.get("/:id", getSingleHighlight);
router.put("/:id", updateHighlight);
router.delete("/:id", deleteHighlight);

module.exports = router;
