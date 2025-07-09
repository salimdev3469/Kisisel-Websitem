import React, { useEffect, useState } from 'react';
import API from '../../services/api';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function ProjectsAdmin() {
    const [projects, setProjects] = useState([]);
    const [form, setForm] = useState({
        title: '',
        description: '',
        technologies: '',
        link: '',
        imageUrl: ''
    });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = () => {
        API.get('/projects')
            .then(res => setProjects(res.data))
            .catch(err => console.error(err));
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            ...form,
            technologies: form.technologies.split(',').map(t => t.trim())
        };

        if (editId) {
            // Güncelleme
            API.put(`/projects/${editId}`, payload)
                .then(() => {
                    loadProjects();
                    resetForm();
                })
                .catch(err => console.error(err));
        } else {
            // Yeni ekleme
            API.post('/projects', payload)
                .then(() => {
                    loadProjects();
                    resetForm();
                })
                .catch(err => console.error(err));
        }
    };

    const handleEdit = (project) => {
        setEditId(project._id);
        setForm({
            title: project.title || '',
            description: project.description || '',
            technologies: (project.technologies || []).join(', '),
            link: project.link || '',
            imageUrl: project.imageUrl || ''
        });
    };

    const handleDelete = (id) => {
        API.delete(`/projects/${id}`)
            .then(() => loadProjects())
            .catch(err => console.error(err));
    };

    const resetForm = () => {
        setEditId(null);
        setForm({
            title: '',
            description: '',
            technologies: '',
            link: '',
            imageUrl: ''
        });
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Projeler
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}
            >
                <TextField
                    name="title"
                    label="Başlık"
                    value={form.title}
                    onChange={handleChange}
                />
                <TextField
                    name="description"
                    label="Açıklama"
                    value={form.description}
                    onChange={handleChange}
                />
                <TextField
                    name="technologies"
                    label="Teknolojiler (virgülle)"
                    value={form.technologies}
                    onChange={handleChange}
                />
                <TextField
                    name="link"
                    label="Proje Linki"
                    value={form.link}
                    onChange={handleChange}
                />
                <TextField
                    name="imageUrl"
                    label="Görsel URL"
                    value={form.imageUrl}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained">
                    {editId ? 'Güncelle' : 'Kaydet'}
                </Button>
                {editId && (
                    <Button variant="outlined" color="warning" onClick={resetForm}>
                        Vazgeç
                    </Button>
                )}
            </Box>

            <Box>
                {projects.map((p) => (
                    <Box
                        key={p._id}
                        sx={{ border: '1px solid #ccc', p: 2, mb: 2 }}
                    >
                        <Typography variant="h6">{p.title}</Typography>
                        <Typography>{p.description}</Typography>
                        <Typography color="text.secondary">
                            {p.technologies?.join(', ')}
                        </Typography>
                        <Typography>
                            <a href={p.link} target="_blank" rel="noreferrer">
                                Link
                            </a>
                        </Typography>
                        <img
                            src={p.imageUrl}
                            alt={p.title}
                            style={{ width: '200px' }}
                        />
                        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                            <Button
                                variant="outlined"
                                onClick={() => handleEdit(p)}
                            >
                                Düzenle
                            </Button>
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => handleDelete(p._id)}
                            >
                                Sil
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
