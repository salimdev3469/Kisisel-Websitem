require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();

// ✅ DOĞRU CORS KULLANIMI
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://salimserhataka.onrender.com'
    ],
    credentials: true
}));

app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/messages', messageRoutes);

// Frontend Build Serve
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.all('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;

// ✅ MongoDB Connect (dbName eklenmiş)
mongoose.connect(process.env.MONGO_URI, {
    dbName: "test",
})
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error(err));
