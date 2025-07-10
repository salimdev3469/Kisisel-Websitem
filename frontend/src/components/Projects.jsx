import React, { useEffect, useState } from 'react';
import MultiActionAreaCard from './ProjectCard';
import '@/assets/main.css';
import Button from '@mui/joy/Button';
import API from '../services/api';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        API.get('/projects')
            .then(res => {
                console.log("API Response →", res.data);
                if (res.data && Array.isArray(res.data.data)) {
                    setProjects(res.data.data);
                } else if (Array.isArray(res.data)) {
                    // direkt array dönüyorsa (bazı backendlerde olur)
                    setProjects(res.data);
                } else {
                    console.error("API response does not contain an array:", res.data);
                    setProjects([]);
                }
            })
            .catch(err => console.error(err));
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    const visibleProjects = projects.slice(0, visibleCount);

    return (
        <>
            <div id="projects" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {visibleProjects.map((project) => (
                    <MultiActionAreaCard
                        key={project._id}
                        image={project.imageUrl}
                        title={project.title}
                        location={project.description}
                        link={project.link}
                        technologies={project.technologies}
                    />
                ))}
            </div>
            {visibleCount < projects.length && (
                <div className="load-more" style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Button onClick={handleLoadMore} variant="solid" color="primary">
                        Daha fazlasını gör
                    </Button>
                </div>
            )}
        </>
    );
}

export default Projects;
