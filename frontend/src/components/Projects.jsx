import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button, Box, Grid } from '@mui/material'; // Grid'i buradan çekiyoruz
import API from '../services/api';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        API.get('/projects')
            .then(res => {
                // API hatası olsa bile array kontrolü yapalım
                const data = res.data?.data || res.data;
                setProjects(Array.isArray(data) ? data : []);
            })
            .catch(err => {
                console.error("Projeler yüklenemedi:", err);
                setProjects([]); // Hata durumunda boş dizi ata, uygulama çökmesin
            });
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    const visibleProjects = projects.slice(0, visibleCount);

    return (
        <Box id="projects" sx={{ py: 4 }}>
            {/* MUI v6 GRID SİSTEMİ DÜZELTMESİ */}
            <Grid container spacing={4} justifyContent="center">
                {visibleProjects.map((project) => (
                    // 'item' prop'u YOK. xs={12} yerine size={{ xs: 12 }} kullanıyoruz.
                    <Grid key={project._id} size={{ xs: 12, sm: 6, md: 4 }}>
                        <ProjectCard
                            image={project.imageUrl}
                            title={project.title}
                            location={project.description}
                            link={project.link}
                            technologies={project.technologies}
                        />
                    </Grid>
                ))}
            </Grid>

            {visibleCount < projects.length && (
                <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <Button
                        onClick={handleLoadMore}
                        variant="outlined"
                        size="large"
                        sx={{
                            color: '#fff',
                            borderColor: 'rgba(255,255,255,0.2)',
                            '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.05)' }
                        }}
                    >
                        Daha Fazla Proje
                    </Button>
                </Box>
            )}
        </Box>
    );
}

export default Projects;