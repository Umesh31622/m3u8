const Banner = require("../models/Banner");
const cloudinary = require("../config/cloudinary");

// CREATE Banner
exports.createBanner = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    const banner = await Banner.create({
      title: req.body.title,
      image: req.file.path,       // Cloudinary URL
      public_id: req.file.filename,
    });

    res.status(201).json({
      success: true,
      banner,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// GET All Banners
exports.getBanners = async (req, res) => {
  try {
    const banners = await Banner.find().sort({ createdAt: -1 });
    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Banner
exports.deleteBanner = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);

    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(banner.public_id);

    // Delete from DB
    await banner.deleteOne();

    res.json({ success: true, message: "Banner deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};