import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Snackbar,
    Alert,
    Paper
} from '@mui/material'; // Joy yerine Material importları
import SendIcon from '@mui/icons-material/Send';
import API from '../services/api';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackbarOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // API isteği simülasyonu veya gerçek istek
        API.post('/messages', formData)
            .then((res) => {
                setSnackbarSeverity('success');
                setSnackbarMessage('Mesajınız başarıyla gönderildi!');
                setSnackbarOpen(true);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((err) => {
                console.error(err);
                setSnackbarSeverity('error');
                setSnackbarMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
                setSnackbarOpen(true);
            });
    };

    return (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

                <Box>
                    <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                        Bana Ulaşın
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Detaylı özgeçmiş (CV) talebi için mesaj kısmına 'CV' yazmanız yeterlidir.
                    </Typography>
                </Box>

                <TextField
                    label="Ad Soyad"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    required
                />

                <TextField
                    label="E-Posta"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    required
                />

                <TextField
                    label="Mesajınız"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                />

                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ alignSelf: 'flex-end', px: 4 }}
                >
                    Gönder
                </Button>
            </Box>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Paper>
    );
}