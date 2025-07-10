import * as React from 'react';
import barIcon from "/src/assets/bars.svg";
import logo from "/src/assets/logo.png";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const scrollToElement = (selector, offsetEm = 0) => {
        const element = document.querySelector(selector);
        if (element) {
            const rect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const emInPx = offsetEm * parseFloat(getComputedStyle(document.documentElement).fontSize);
            const top = rect.top + scrollTop - emInPx;

            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        }
    };

    const handleNavigation = (targetId) => () => {
        scrollToElement(targetId, 1);
        setOpen(false);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <img
                    src={logo}
                    alt="Logo"
                    id="drawer-logo"
                    style={{ maxWidth: '100%', marginBottom: '16px' }}
                />
                <ListItem disablePadding>
                    <ListItemButton onClick={handleNavigation('#second')}>
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Projelerim" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={handleNavigation('#third')}>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Deneyimlerim" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={handleNavigation('#forth')}>
                        <ListItemIcon>
                            <ContactMailIcon />
                        </ListItemIcon>
                        <ListItemText primary="İletişim" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );

    return (
        <>
            <Button onClick={toggleDrawer(true)}>
                <img id="bar-icon" src={barIcon} alt="Menu" />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    );
}
