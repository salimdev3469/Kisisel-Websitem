const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middlewares/authMiddleware');

// Sadece login olanlar proje ekleyebilir
router.post('/', auth, projectController.createProject);

router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProject);
router.put('/:id', auth, projectController.updateProject);
router.delete('/:id', auth, projectController.deleteProject);

module.exports = router;
