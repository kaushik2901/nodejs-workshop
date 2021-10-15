const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, default: 0 },
}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);