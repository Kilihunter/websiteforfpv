import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import backgroundImage from '/pictures/images.jpeg';

function GalleryPage() {
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
          About
        </Typography>
      </Box>

      {/* Neuer Inhalt, zentriert */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Erster Abschnitt: Bild links, Text rechts */}
        <Grid container spacing={4} justifyContent="center" mb={4}>
          <Grid item xs={12} md={6}>
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
             <Typography variant="h3" gutterBottom>
        Hi, wir sind das FPVision-Team!
        
        </Typography>
        <Typography variant="body1">
        Seit mehreren Monaten sind wir mit voller Begeisterung in der Welt der FPV-Drohnen unterwegs.

FPV steht für First Person View – das bedeutet, wir fliegen unsere Drohnen mit einer speziellen Videobrille und sehen dabei in Echtzeit genau das, was die Drohne sieht. So wird jeder Flug zu einem immersiven Erlebnis – und das sieht man auch in unseren Aufnahmen.

Durch diese Technik können wir extrem präzise manövrieren – durch enge Räume, unter Hindernissen hindurch oder mitten durch spannende Locations.
Im Gegensatz zu klassischen Kameradrohnen, wie etwa von DJI, sind unsere FPV-Drohnen auf Geschwindigkeit, Agilität und kreative Freiheit ausgelegt.

Ob für actionreiche Werbevideos, besondere Eventaufnahmen oder spektakuläre Luftbilder für Social Media – wir zeigen Perspektiven, die im Kopf bleiben.
Unser Ziel: Aufnahmen, die Emotionen wecken und in Erinnerung bleiben.
        </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Zweiter Abschnitt: Text links, Bild rechts */}
        <Grid container spacing={4} justifyContent="center">
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
                src="/pictures/images.jpeg"
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
      </Container>
    </>
  );
}

export default GalleryPage;
