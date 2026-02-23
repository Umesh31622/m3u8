const MatchHighlight = require("../models/MatchHighlight");

// CREATE
exports.createHighlight = async (req, res) => {
  try {
    const highlight = await MatchHighlight.create(req.body);
    res.status(201).json({
      success: true,
      message: "Highlight Created",
      data: highlight
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET ALL
exports.getAllHighlights = async (req, res) => {
  try {
    const highlights = await MatchHighlight.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: highlights.length,
      data: highlights
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET SINGLE
exports.getSingleHighlight = async (req, res) => {
  try {
    const highlight = await MatchHighlight.findById(req.params.id);

    if (!highlight) {
      return res.status(404).json({
        success: false,
        message: "Highlight Not Found"
      });
    }

    res.status(200).json({
      success: true,
      data: highlight
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// UPDATE
exports.updateHighlight = async (req, res) => {
  try {
    const updated = await MatchHighlight.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Highlight Updated",
      data: updated
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE
exports.deleteHighlight = async (req, res) => {
  try {
    await MatchHighlight.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Highlight Deleted"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
