import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#185ea5',
                color: '#fff',
                textAlign: 'center',
                py: 2,
                mt: 'auto',
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} Tüm hakları saklıdır.
            </Typography>
        </Box>
    );
}
