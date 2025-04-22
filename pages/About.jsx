import { Box, Typography } from '@mui/material';
import backgroundImage from '/pictures/images.jpeg'; // dein Bild hier

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
          Hi wir sind das fpvision team 
        </Typography>
        <Typography variant="body1">
          Unser kontakt daten sind:
        </Typography>
        <Typography variant="body1">
          E-MAil: sturm268@gmail.com
        </Typography>
        <Typography variant="body1">
          Telephon:
        </Typography>
        <Typography variant="body1">
          Straße:
        </Typography>
      </Box>
    </Box>
  );
}
