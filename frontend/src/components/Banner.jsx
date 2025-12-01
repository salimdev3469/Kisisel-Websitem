import React from 'react';
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../assets/main.css';

// --- 3D Kod Penceresi Bileşeni ---
const CodeWindow = () => (
    <motion.div
        initial={{ opacity: 0, x: 50, rotateY: -10 }}
        animate={{ opacity: 1, x: 0, rotateY: -10 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Box sx={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            borderRadius: '16px',
            padding: { xs: '20px', md: '24px' },
            backdropFilter: 'blur(10px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            transform: { md: 'rotateY(-12deg) rotateX(5deg)' },
            maxWidth: '500px',
            width: '100%',
            textAlign: 'left', // Kodlar her zaman sola dayalı
            fontFamily: '"Fira Code", monospace',
        }}>
            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#EF4444' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#F59E0B' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10B981' }} />
            </Box>

            <Box sx={{ color: '#E2E8F0', fontSize: { xs: '0.85rem', sm: '0.9rem' }, lineHeight: 1.6 }}>
                 <div style={{ color: '#94A3B8' }}>// Refactoring the future</div>
                 <div>
                    <span style={{ color: '#C084FC' }}>const</span> <span style={{ color: '#38BDF8' }}>Profile</span> = {'{'}
                 </div>
                 <Box sx={{ pl: 3 }}>
                    name: <span style={{ color: '#A3E635' }}>'Salim Serhat AKA'</span>,
                 </Box>
                 <Box sx={{ pl: 3 }}>
                    role: <span style={{ color: '#A3E635' }}>'Full-Stack Developer'</span>,
                 </Box>
                 <Box sx={{ pl: 3 }}>
                    stack: [<span style={{ color: '#A3E635' }}>'React'</span>, <span style={{ color: '#A3E635' }}>'.NET'</span>, <span style={{ color: '#A3E635' }}>'Flutter'</span>]
                 </Box>
                 <div>{'}'};</div>
                 
                 <div style={{ marginTop:'12px', display:'flex', alignItems:'center' }}>
                    <span style={{ color: '#C084FC' }}>await</span>&nbsp;project.<span style={{ color: '#38BDF8' }}>launch()</span>;
                    <span className="cursor-blink" style={{ width:'8px', height:'18px', background:'#38BDF8', marginLeft:'6px' }}></span>
                 </div>
            </Box>
        </Box>
    </motion.div>
);

// --- Ana Banner Bileşeni ---
function Banner() {
    return (
        <Box className="hero-bg" sx={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            pt: { xs: 12, md: 0 }, 
            pb: { xs: 8, md: 0 },
            overflow: 'hidden', 
            position: 'relative'
        }}>
            <div className="hero-glow" /> 
            
            <Container maxWidth="xl">
                {/* justifyContent="center": İçerik bloklarını (Yazı ve Resim) sayfanın ortasına toplar.
                   alignItems="center": Dikeyde ortalar.
                */}
                <Grid container spacing={6} alignItems="center" justifyContent="center">
                    
                    {/* SOL TARAF (Yazılar) */}
                    <Grid item xs={12} md={7} sx={{ 
                        // KRİTİK AYAR: Mobilde ortala, PC'de SOLA yasla
                        textAlign: { xs: 'center', md: 'left' }, 
                        display: 'flex',
                        flexDirection: 'column',
                        // KRİTİK AYAR: Flex öğelerini mobilde ortala, PC'de başa (sola) al
                        alignItems: { xs: 'center', md: 'flex-start' } 
                    }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'inherit' }}
                        >
                            {/* Rozet */}
                            <Box sx={{ 
                                display: 'inline-flex', 
                                px: 2, py: 0.8, mb: 3, 
                                borderRadius: '20px', 
                                background: 'rgba(56, 189, 248, 0.1)', 
                                border: '1px solid rgba(56, 189, 248, 0.2)',
                                color: '#38BDF8', fontSize: '0.85rem', fontWeight: 600
                            }}>
                                Available for Projects
                            </Box>

                            {/* Devasa İsim (Sola Yaslı) */}
                            <Typography variant="h1" sx={{ 
                                fontSize: { xs: '3.5rem', sm: '5rem', md: '5.5rem', lg: '7rem' }, 
                                fontWeight: 900, 
                                lineHeight: 0.95, 
                                color: '#fff', 
                                mb: 3,
                                letterSpacing: '-0.03em',
                                textTransform: 'uppercase'
                            }}>
                                SALiM<br/>
                                <span style={{ 
                                    background: 'linear-gradient(to right, #ffffff 20%, #94A3B8 100%)', 
                                    WebkitBackgroundClip: 'text', 
                                    WebkitTextFillColor: 'transparent' 
                                }}>
                                    SERHAT AKA
                                </span>
                            </Typography>
                            
                            {/* Alt Açıklama (Sola Yaslı) */}
                            <Typography sx={{ 
                                fontSize: { xs: '1.1rem', md: '1.25rem' }, 
                                color: '#94A3B8', 
                                mb: 5, 
                                lineHeight: 1.6,
                                maxWidth: '650px',
                                fontWeight: 300,
                                // Mobilde margin auto ile ortala, PC'de 0 (sola yapışık)
                                mx: { xs: 'auto', md: 0 } 
                            }}>
                                Kurumsal mimariye uygun, <strong style={{color:'#fff'}}>yüksek performanslı</strong> web ve mobil sistemler geliştiren Bilgisayar Mühendisi.
                            </Typography>

                            {/* Butonlar */}
                            <Stack 
                                direction={{ xs: 'column', sm: 'row' }} 
                                spacing={2} 
                                // Mobilde ortala, PC'de başa (sola)
                                justifyContent={{ xs: 'center', md: 'flex-start' }} 
                                sx={{ width: '100%' }}
                            >
                                <Button 
                                    variant="contained" 
                                    size="large"
                                    endIcon={<ArrowForwardIcon />}
                                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                                    sx={{ 
                                        py: 1.5, px: 5, fontSize: '1rem',
                                        background: '#fff', color: '#0F172A', fontWeight: 'bold',
                                        '&:hover': { background: '#F1F5F9', transform: 'translateY(-2px)' },
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    Projeleri İncele
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    size="large" 
                                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                    sx={{ 
                                        py: 1.5, px: 5, fontSize: '1rem',
                                        borderColor: 'rgba(255,255,255,0.2)', color: '#fff',
                                        '&:hover': { borderColor: '#fff', background: 'rgba(255,255,255,0.05)' }
                                    }}
                                >
                                    İletişime Geç
                                </Button>
                            </Stack>
                        </motion.div>
                    </Grid>

                    {/* SAĞ TARAF (Kod Kartı) */}
                    <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <CodeWindow />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}

export default Banner;
