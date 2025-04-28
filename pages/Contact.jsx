import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import backgroundImage from '/pictures/images.jpeg';

function Contact() {
  return (
    <>
      {/* Header-Bild */}
      <Box
        sx={{
          height: '30vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#fff',
            backgroundColor: 'rgba(0,0,0,0.5)',
            px: 3,
            py: 1,
            borderRadius: 2,
          }}
        >
          Galerie
        </Typography>
      </Box>

      {/* Neuer Inhalt (statt Videos) */}
      <Box sx={{ px: 4, py: 6 }}>
        {/* Erster Abschnitt: Bild links, Text rechts */}
        <Grid container spacing={0} mb={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, md: 400 },
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src="/images/image1.jpg"
                alt="Bild 1"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, md: 400 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Überschrift 1
              </Typography>
              <Typography variant="body1">
                Hier dein Textblock für den ersten Bereich.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Zweiter Abschnitt: Text links, Bild rechts */}
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, md: 400 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Überschrift 2
              </Typography>
              <Typography variant="body1">
                Und hier dein Textblock für den zweiten Bereich.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, md: 400 },
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src="/images/image2.jpg"
                alt="Bild 2"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Contact;
