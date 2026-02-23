const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const {
  createBanner,
  getBanners,
  deleteBanner,
} = require("../controllers/bannerController");

// Cloudinary Storage Setup
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ott_banners",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

// Routes
router.post("/", upload.single("image"), createBanner);
router.get("/", getBanners);
router.delete("/:id", deleteBanner);

module.exports = router;    