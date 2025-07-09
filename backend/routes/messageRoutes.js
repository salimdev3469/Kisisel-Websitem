const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const auth = require('../middlewares/authMiddleware');

router.post('/', messageController.createMessage);
router.get('/', auth, messageController.getMessages);

module.exports = router;
