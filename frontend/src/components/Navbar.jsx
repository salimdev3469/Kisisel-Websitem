import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Container, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './LeftDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    const navItems = [
        { label: 'Yetenekler', id: 'first' },
        { label: 'Projeler', id: 'second' },
        { label: 'Deneyim', id: 'third' },
    ];

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: scrolled ? 'rgba(2, 6, 23, 0.8)' : 'transparent', // Slate 950 alpha
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'all 0.3s ease',
                py: 1
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* LOGO ALANI - Tipografik Logo */}
                    <Typography
                        variant="h6"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        sx={{
                            fontWeight: 800,
                            letterSpacing: '-0.5px',
                            cursor: 'pointer',
                            color: '#fff',
                            fontSize: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}
                    >
                        S.SERHAT<span style={{ color: '#38BDF8' }}>.</span>AKA
                    </Typography>

                    {/* MENÜ ALANI */}
                    {isMobile ? (
                        <TemporaryDrawer />
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            {navItems.map((item) => (
                                <Typography
                                    key={item.label}
                                    onClick={() => scrollTo(item.id)}
                                    sx={{
                                        cursor: 'pointer',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        color: '#94A3B8', // Slate 400
                                        transition: 'color 0.2s',
                                        '&:hover': { color: '#fff' }
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            ))}

                            {/* CTA Butonu - Navbar'da Farklılaşmalı */}
                            <Button
                                variant="outlined"
                                onClick={() => scrollTo('contact')}
                                sx={{
                                    borderColor: '#334155',
                                    color: '#fff',
                                    textTransform: 'none',
                                    borderRadius: '8px',
                                    px: 3,
                                    '&:hover': {
                                        borderColor: '#fff',
                                        background: 'rgba(255,255,255,0.05)'
                                    }
                                }}
                            >
                                İletişime Geç
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;