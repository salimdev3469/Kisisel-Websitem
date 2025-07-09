const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, experienceController.createExperience);
router.get('/', experienceController.getExperiences);
router.put('/:id', auth, experienceController.updateExperience);
router.delete('/:id', auth, experienceController.deleteExperience);

module.exports = router;
