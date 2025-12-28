import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography, Grid, Container } from '@mui/material';
import backgroundImage from '/pictures/DSC04197_croped.jpg';
import myImage from '/pictures/DSC04175.jpg';

function GalleryPage() {
  return (
    <>
    <Helmet>
        <title>Home | My FPV Journey</title>
        <meta name="description" content="Cinematic FPV drone footage and photography portfolio." />
      </Helmet>
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
            <Box
              sx={{
                width: '100%',
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
        Hi, ich bin Kilian von Sturm FPV!
        
        </Typography>
        <Typography variant="body1">
        Seit mehreren Monaten bin ich mit voller Begeisterung in der Welt der FPV-Drohnen unterwegs. FPV steht für First Person View – das bedeutet, ich fliege meine Drohnen mit einer speziellen Videobrille und sehe dabei in Echtzeit genau das, was die Drohne sieht. So wird jeder Flug zu einem immersiven Erlebnis – und das sieht man auch in meinen Aufnahmen.

Durch diese Technik kann ich extrem präzise manövrieren – durch enge Räume, unter Hindernissen hindurch oder mitten durch spannende Locations. Im Gegensatz zu klassischen Kameradrohnen sind meine FPV-Drohnen auf Geschwindigkeit, Agilität und kreative Freiheit ausgelegt.

Ob für actionreiche Werbevideos, besondere Eventaufnahmen oder spektakuläre Luftbilder für Social Media – ich zeige Perspektiven, die im Kopf bleiben. Mein Ziel: Aufnahmen, die Emotionen wecken und in Erinnerung bleiben.
        </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Zweiter Abschnitt: Text links, Bild rechts */}
        <Grid container spacing={2} justifyContent="center">
          <Grid size={8}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
                textAlign: 'center',
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Wer steckt dahinter?
              </Typography>
              <Typography variant="body1">
                Ich bin Kilian, der Kopf, Pilot und kreative Motor hinter Sturm FPV. Im Bild siehst du mich gerade bei der Vorbereitung einer meiner speziell angefertigten FPV-Drohnen.

Als dein direkter Ansprechpartner – vom ersten Konzept bis zur finalen Aufnahme – verbinde ich technisches Flugkönnen mit einem filmischen Auge. Mein Anspruch ist es, deine Vision ohne Umwege in packende Bilder zu verwandeln.
              </Typography>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box
              sx={{
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'right',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={myImage}
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
