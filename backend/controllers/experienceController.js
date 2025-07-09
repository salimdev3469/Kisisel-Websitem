const Experience = require('../models/Experience');

exports.createExperience = async (req, res) => {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
};

exports.getExperiences = async (req, res) => {
    const experiences = await Experience.find();
    res.json(experiences);
};

exports.updateExperience = async (req, res) => {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(experience);
};

exports.deleteExperience = async (req, res) => {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
};
