import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import ProjectsAdmin from '../components/admin/ProjectsAdmin';
import ExperiencesAdmin from '../components/admin/ExperiencesAdmin';
import MessagesAdmin from '../components/admin/MessagesAdmin';

export default function Manage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" mb={2}>Admin Panel</Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Button variant="outlined" component={Link} to="/manage/projects">Projeler</Button>
                <Button variant="outlined" component={Link} to="/manage/experiences">Deneyimler</Button>
                <Button variant="outlined" component={Link} to="/manage/messages">Mesajlar</Button>
                <Button variant="contained" color="error" onClick={handleLogout}>Çıkış</Button>
            </Box>

            <Routes>
                <Route path="projects" element={<ProjectsAdmin />} />
                <Route path="experiences" element={<ExperiencesAdmin />} />
                <Route path="messages" element={<MessagesAdmin />} />
            </Routes>
        </Box>
    );
}
