const Project = require('../models/Project');

exports.createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProjects = async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
};

exports.getProject = async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Not found' });
    res.json(project);
};

exports.updateProject = async (req, res) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
};

exports.deleteProject = async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
};
