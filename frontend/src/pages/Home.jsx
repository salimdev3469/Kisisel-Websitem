import React from 'react'
import { Container, Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import ContactForm from '../components/Contact';
import SocialLinks from '../components/SocialMediaLink';
import Footer from '../components/Footer';

// Bölüm Başlığı İçin Yardımcı Bileşen
// Bölüm Başlığı İçin Responsive Bileşen
const SectionHeader = ({ title, id }) => (
    <Box id={id} sx={{ py: { xs: 6, md: 10 }, textAlign: 'center', px: 2 }}>
        <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
                fontSize: { xs: '2rem', md: '3rem' }, // Mobilde küçült
                fontWeight: 800,
                letterSpacing: '-0.02em'
            }}
        >
            {title}
        </Typography>
        <Box sx={{
            width: { xs: 60, md: 100 },
            height: 4,
            background: 'linear-gradient(90deg, #3B82F6, #10B981)',
            mx: 'auto',
            borderRadius: 2
        }} />
    </Box>
);

function Home() {
    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', overflowX: 'hidden' }}>
            <Navbar />
            <Banner />

            {/* maxWidth="xl" yaparak geniş ekranlarda kenar boşluklarını azaltıyoruz */}
            <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4, lg: 8 } }}>

                <SectionHeader title="Yeteneklerim" id="first" />
                <Carousel /> {/* Carousel içindeki image size'larını da mobilde küçültmek gerekebilir */}

                <SectionHeader title="Seçilmiş Projeler" id="second" />
                <Projects />

                <SectionHeader title="Profesyonel Deneyim" id="third" />
                <Timeline />

                <SectionHeader title="İletişim" id="contact" />
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Mobilde alt alta, PC'de yan yana
                    gap: { xs: 6, md: 8 },
                    mb: 8,
                    alignItems: 'center'
                }}>
                    <Box sx={{ flex: 1, width: '100%' }}>
                        <ContactForm />
                    </Box>
                    <Box sx={{ flex: 0.5, display: 'flex', justifyContent: 'center' }}>
                        <SocialLinks />
                    </Box>
                </Box>
            </Container>

            <Footer />
        </Box>
    )
}

export default Home