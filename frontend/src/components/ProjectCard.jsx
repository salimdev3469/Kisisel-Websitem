import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MultiActionAreaCard({ image, title, location, link, technologies }) {
    return (
        <Card
            variant="outlined"
            sx={{
                width: 320,
                transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.04)',
                    boxShadow: 'lg',
                    borderColor: 'primary.500',
                },
            }}
        >
            <CardOverflow>
                <AspectRatio ratio="2">
                    <img
                        src={image}
                        loading="lazy"
                        alt={title}
                        style={{ objectFit: 'contain' }}
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography level="title-md" sx={{ minHeight: '2.5em' }}>
                    {title}
                </Typography>
                <Typography
                    level="body-sm"
                    sx={{
                        height: '6em',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        display: '-webkit-box',
                    }}
                >
                    {location}
                </Typography>
                {technologies && technologies.length > 0 && (
                    <Typography
                        level="body-xs"
                        sx={{ mt: 1, color: 'primary.600' }}
                    >
                        <strong>Teknolojiler:</strong> {technologies.join(', ')}
                    </Typography>
                )}
            </CardContent>
            {link && (
                <CardContent>
                    <Button
                        component="a"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        sx={{
                            width: '100%',
                            backgroundColor: '#000',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#333',
                            },
                            textTransform: 'none',
                        }}
                    >
                        GitHub'da Projeyi Gör
                    </Button>
                </CardContent>
            )}
        </Card>
    );
}
