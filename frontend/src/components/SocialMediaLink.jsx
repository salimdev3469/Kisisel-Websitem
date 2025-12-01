import React from 'react';
import { Box, IconButton, Stack, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const socialLinks = [
    {
        url: 'https://www.linkedin.com/in/salim-serhat-aka-32b98b318/',
        name: 'LinkedIn',
        icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
        color: '#0A66C2'
    },
    {
        url: 'https://github.com/salimdev3469',
        name: 'GitHub',
        icon: <GitHubIcon sx={{ fontSize: 40 }} />,
        color: '#ffffff'
    },
    {
        url: 'mailto:email@example.com', // Buraya kendi mailini yaz
        name: 'Email',
        icon: <EmailIcon sx={{ fontSize: 40 }} />,
        color: '#EA4335'
    }
];

export default function SocialLinks() {
    return (
        <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
            {socialLinks.map((link) => (
                <Tooltip key={link.name} title={link.name} arrow>
                    <IconButton
                        component="a"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: '#94A3B8', // Varsayılan gri
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(255,255,255,0.1)',
                            p: 2,
                            '&:hover': {
                                color: link.color, // Hover olunca kendi rengini al
                                transform: 'translateY(-5px)',
                                borderColor: link.color,
                                boxShadow: `0 0 20px ${link.color}40` // Glow efekti
                            }
                        }}
                    >
                        {link.icon}
                    </IconButton>
                </Tooltip>
            ))}
        </Stack>
    );
}