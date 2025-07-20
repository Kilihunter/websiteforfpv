import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
export default function HeroSection() {
  return (
    <Box sx={{ position: 'relative', height: '90vh', overflow: 'hidden'}}>
      {/* Hintergrundvideo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      >
        <source src="/videos/ThePfalzv1.mp4" type="video/mp4" />
        Dein Browser unterstützt kein Video.
      </video>

      {/* Inhalt über dem Video */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'white',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Willkommen!
        </Typography>
        <Typography variant="h5" gutterBottom>
        Entdecke die Freiheit neuer Perspektiven
        </Typography>
        <Button component={Link} to="/contact" color="primary">
          Film Buchen
        </Button>
      </Box>
    </Box>
  );
}
