import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3B82F6', // Elektrik Mavisi
            contrastText: '#fff',
        },
        secondary: {
            main: '#10B981', // Neon Yeşil (Başarı/Aksiyon için)
        },
        background: {
            default: '#0B0F19', // CSS ile uyumlu
            paper: '#111827', // Kartlar için biraz daha açık ton
        },
        text: {
            primary: '#F1F5F9',
            secondary: '#94A3B8',
        },
    },
    typography: {
        fontFamily: '"Inter", sans-serif',
        h1: { fontWeight: 800, letterSpacing: '-0.02em' },
        h2: { fontWeight: 700, letterSpacing: '-0.01em' },
        h3: { fontWeight: 600, letterSpacing: '-0.01em' },
        button: { fontWeight: 600, textTransform: 'none', letterSpacing: '0.02em' },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    padding: '10px 24px',
                    fontSize: '1rem',
                },
                containedPrimary: {
                    background: 'linear-gradient(45deg, #2563EB 30%, #3B82F6 90%)',
                    boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.4)',
                    '&:hover': {
                        boxShadow: '0 6px 20px 0 rgba(37, 99, 235, 0.6)',
                    }
                }
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none', // Material'ın default overlay'ini kaldır
                }
            }
        }
    },
});

export default theme;