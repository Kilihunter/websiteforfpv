import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import videoSource from '../videos/ThePfalzv1.mp4';

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startVideo = () => {
      // Always start from the beginning
      video.currentTime = 0;

      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {
          // Autoplay blocked -> wait for first user interaction
          const onFirstInteraction = () => {
            video.currentTime = 0;
            video.play().catch(() => {
              // If it *still* fails, we just give up silently
            });
            window.removeEventListener('touchstart', onFirstInteraction);
            window.removeEventListener('click', onFirstInteraction);
          };

          window.addEventListener('touchstart', onFirstInteraction, { once: true });
          window.addEventListener('click', onFirstInteraction, { once: true });
        });
      }
    };

    startVideo();
  }, []);

  return (
    <Box sx={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
      {/* Hintergrundvideo */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
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
        <source src={videoSource} type="video/mp4" />
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
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(49, 48, 48, 0.5)',
            backdropFilter: "blur(6px)",
            px: 3,
            py: 3,
            borderRadius: 2,
            mx: { xs: 2, sm: 3 },
          }}
        >
          <Typography variant="h2" gutterBottom sx={{
             color: "#fff",
              fontWeight: 600,
              letterSpacing: 2,
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              lineHeight: 1,}}>
            Willkommen!
          </Typography>
          <Typography variant="h5" gutterBottom>
            Entdecke die Freiheit neuer Perspektiven
          </Typography>
          <Button
            component={Link}
            to="/contact"
            color="success"
            sx={{ backgroundColor: 'transparent' }}
          >
            Film Buchen
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
