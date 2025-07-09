import React, { useEffect, useState } from 'react';
import API from '../../services/api';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function ExperiencesAdmin() {
    const [experiences, setExperiences] = useState([]);
    const [form, setForm] = useState({
        company: '',
        position: '',
        description: '',
        startDate: '',
        endDate: ''
    });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        loadExperiences();
    }, []);

    const loadExperiences = () => {
        API.get('/experiences')
            .then(res => setExperiences(res.data))
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

        if (editId) {
            API.put(`/experiences/${editId}`, form)
                .then(() => {
                    loadExperiences();
                    resetForm();
                })
                .catch(err => console.error(err));
        } else {
            API.post('/experiences', form)
                .then(() => {
                    loadExperiences();
                    resetForm();
                })
                .catch(err => console.error(err));
        }
    };

    const handleEdit = (experience) => {
        setEditId(experience._id);
        setForm({
            company: experience.company || '',
            position: experience.position || '',
            description: experience.description || '',
            startDate: experience.startDate?.substring(0, 10) || '',
            endDate: experience.endDate?.substring(0, 10) || ''
        });
    };

    const handleDelete = (id) => {
        API.delete(`/experiences/${id}`)
            .then(() => loadExperiences())
            .catch(err => console.error(err));
    };

    const resetForm = () => {
        setEditId(null);
        setForm({
            company: '',
            position: '',
            description: '',
            startDate: '',
            endDate: ''
        });
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>Deneyimler</Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}
            >
                <TextField
                    name="company"
                    label="Şirket"
                    value={form.company}
                    onChange={handleChange}
                />
                <TextField
                    name="position"
                    label="Pozisyon"
                    value={form.position}
                    onChange={handleChange}
                />
                <TextField
                    name="description"
                    label="Açıklama"
                    value={form.description}
                    onChange={handleChange}
                />
                <TextField
                    name="startDate"
                    label="Başlangıç"
                    type="date"
                    value={form.startDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    name="endDate"
                    label="Bitiş"
                    type="date"
                    value={form.endDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
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
                {experiences.map(e => (
                    <Box key={e._id} sx={{ border: '1px solid #ccc', p: 2, mb: 2 }}>
                        <Typography variant="h6">
                            {e.position} @ {e.company}
                        </Typography>
                        <Typography>{e.description}</Typography>
                        <Typography color="text.secondary">
                            {e.startDate?.substring(0, 10)} → {e.endDate?.substring(0, 10) || 'Devam ediyor'}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                            <Button variant="outlined" onClick={() => handleEdit(e)}>
                                Düzenle
                            </Button>
                            <Button variant="outlined" color="error" onClick={() => handleDelete(e._id)}>
                                Sil
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
