import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton'; // Button yerine IconButton
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu'; // Standart Menü İkonu
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const scrollToElement = (id) => {
        const element = document.getElementById(id.replace('#', ''));
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            setOpen(false);
        }
    };

    const DrawerList = (
        <Box
            sx={{
                width: 280,
                height: '100%',
                bgcolor: '#0F172A', // Koyu Arkaplan
                color: '#fff',
                p: 2
            }}
            role="presentation"
        >
            {/* Drawer Header (Kapat Butonu) */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <IconButton onClick={toggleDrawer(false)} sx={{ color: '#fff' }}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <List>
                {/* Logo veya İsim */}
                <ListItem sx={{ mb: 4 }}>
                    <ListItemText
                        primary="S.SERHAT AKA"
                        primaryTypographyProps={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#38BDF8' }}
                    />
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => scrollToElement('#second')}>
                        <ListItemIcon sx={{ color: '#94A3B8' }}><WorkIcon /></ListItemIcon>
                        <ListItemText primary="Projelerim" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => scrollToElement('#third')}>
                        <ListItemIcon sx={{ color: '#94A3B8' }}><SchoolIcon /></ListItemIcon>
                        <ListItemText primary="Deneyimlerim" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => scrollToElement('#contact')}>
                        <ListItemIcon sx={{ color: '#94A3B8' }}><ContactMailIcon /></ListItemIcon>
                        <ListItemText primary="İletişim" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            {/* ESKİ RESİM KODU YERİNE BU: */}
            <IconButton
                onClick={toggleDrawer(true)}
                edge="start"
                sx={{
                    color: '#fff', // İkon rengi beyaz
                    display: { md: 'none' } // Sadece mobilde görünsün (md ve üstünde gizle)
                }}
            >
                <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>

            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        bgcolor: 'transparent', // Arka plan şeffaf olsun ki bizim Box rengi görünsün
                        backdropFilter: 'blur(5px)'
                    }
                }}
            >
                {DrawerList}
            </Drawer>
        </>
    );
}