import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import backgroundImage from '/pictures/DSC04197_littlecropped.jpg'; // dein Bild hier

export default function HeroSection() {
  return (
    <>
    <Helmet>
        <title>Home | My FPV Journey</title>
        <meta name="description" content="Cinematic FPV drone footage and photography portfolio." />
      </Helmet>
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Overlay-Box mit Text */}
      <Box sx={{
          position: 'absolute',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // schwarz mit Transparenz
          color: 'white',
          padding: 4,
          boxShadow: 3,
          borderRadius: 3,
          bgcolor: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(6px)",
          maxWidth: { xs: '90%', md: '40%' },
        }}
>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  letterSpacing: 2,
                  
                  fontSize: { xs: "2.2rem", md: "3.2rem" },
                  lineHeight: 1,
                }}>
        Contact
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1, }}>
       E-Mail: its.kili.fpv@gmail.com
        </Typography>
        <Typography variant="body1">
          Instagram: sturm_fpv
        </Typography>
      </Box>
    </Box>
    </>
  );
}
