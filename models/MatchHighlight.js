const mongoose = require("mongoose");

const matchHighlightSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  matchType: { type: String, default: "LIVE" },
  videoUrl: { type: String, required: true },
  league: String,
  team1: String,
  team2: String,
  team1Logo: String,
  team2Logo: String,
  isLive: { type: Boolean, default: false },
  viewers: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("MatchHighlight", matchHighlightSchema);
