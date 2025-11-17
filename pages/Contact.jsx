import { Box, Typography } from '@mui/material';
import backgroundImage from '/pictures/DSC04197.jpg'; // dein Bild hier

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay-Box mit Text */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // schwarz mit Transparenz
          color: 'white',
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          maxWidth: { xs: '90%', md: '40%' },
        }}
      >
        <Typography variant="h3" gutterBottom>
        Kontakt daten
        
        </Typography>
        <Typography variant="body1">
       E-Mail: its.kili.fpv@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}
