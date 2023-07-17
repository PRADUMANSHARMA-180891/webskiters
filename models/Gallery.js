const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Gallery', gallerySchema);
