import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MultiActionAreaCard({ image, title, location, link }) {
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
                        alt=""
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
                        height: '6em',              // sabit yükseklik
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {location}
                </Typography>
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
