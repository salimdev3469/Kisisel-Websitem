import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        API.post('/auth/login', form)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                navigate('/manage');
            })
            .catch(err => {
                console.error(err);
                alert('Login failed!');
            });
    };

    return (
        <Box sx={{
            maxWidth: 400,
            mx: 'auto',
            mt: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        }}>
            <Typography variant="h5" textAlign="center">
                Admin Login
            </Typography>

            <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
            />

            <TextField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
            />

            <Button variant="contained" onClick={handleSubmit}>
                Login
            </Button>
        </Box>
    );
}
