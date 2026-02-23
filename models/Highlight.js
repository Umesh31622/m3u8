const mongoose = require("mongoose");

const highlightSchema = new mongoose.Schema({
  title: String,
  type: { type: String, enum: ["m3u8", "upload"], default: "m3u8" },
  url: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" }
}, { timestamps: true });

module.exports = mongoose.model("Highlight", highlightSchema);