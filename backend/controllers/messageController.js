const Message = require('../models/Message');

exports.createMessage = async (req, res) => {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json({ message: 'Message saved!' });
};

exports.getMessages = async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
};
