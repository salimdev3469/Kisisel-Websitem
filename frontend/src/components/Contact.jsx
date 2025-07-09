import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import API from '../services/api';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ContactForm() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');
    const [snackbarMessage, setSnackbarMessage] = React.useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        API.post('/messages', formData)
            .then((res) => {
                console.log(res.data);
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
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    maxWidth: 600,
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    mt: 4,
                }}
            >
                <Typography level="h4" textAlign="center">
                    Detaylı özgeçmiş talebi için mesaj kısmına 'CV' yazmanız yeterlidir.
                </Typography>

                <FormControl>
                    <FormLabel>Ad Soyad</FormLabel>
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Adınız.."
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>E-Posta</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-Posta adresiniz.."
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Mesaj</FormLabel>
                    <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        minRows={4}
                        placeholder="Mesajınız.."
                    />
                </FormControl>

                <Button type="submit" color="primary">
                    Gönder
                </Button>
            </Box>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
}
