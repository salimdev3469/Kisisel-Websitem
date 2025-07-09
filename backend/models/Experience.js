const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    description: String,
    startDate: Date,
    endDate: Date,
}, {
    timestamps: true
});

module.exports = mongoose.model('Experience', ExperienceSchema);
