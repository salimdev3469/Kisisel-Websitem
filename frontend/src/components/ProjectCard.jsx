import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({ image, title, location, link, technologies }) {
    return (
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(17, 24, 39, 0.6)', // Yarı saydam
            backdropFilter: 'blur(10px)', // Buzlama
            border: '1px solid rgba(255, 255, 255, 0.08)', // İnce çerçeve
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 20px 40px -5px rgba(0,0,0,0.4)',
                borderColor: '#3B82F6' // Hoverda mavi çerçeve
            }
        }}>
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={image || 'https://via.placeholder.com/400x200'}
                    alt={title}
                    sx={{ transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.05)' } }}
                />
            </Box>

            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography gutterBottom variant="h5" component="div" fontWeight="bold" color="white">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#94A3B8', mb: 3, lineHeight: 1.7 }}>
                    {location}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {technologies?.map((tech, i) => (
                        <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                                background: 'rgba(59, 130, 246, 0.1)',
                                color: '#60A5FA',
                                border: '1px solid rgba(59, 130, 246, 0.2)'
                            }}
                        />
                    ))}
                </Box>

                {link && (
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href={link}
                        target="_blank"
                        sx={{
                            borderColor: 'rgba(255,255,255,0.1)',
                            color: '#fff',
                            '&:hover': { borderColor: '#fff', background: 'rgba(255,255,255,0.05)' }
                        }}
                    >
                        Kaynak Kod
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}