import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Container,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';

// Icons importieren (stelle sicher, dass du @mui/icons-material installiert hast)
import FlightIcon from '@mui/icons-material/Flight';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';

// 1. Feature-Daten in ein Array auslagern
const features = [
  {
    icon: <FlightIcon sx={{ fontSize: 40 }} color="success" />,
    title: 'Dynamische FPV-Flüge',
    description:
      'Spektakuläre Aufnahmen, die Geschwindigkeit und Präzision vereinen.',
  },
  {
    icon: <CameraAltIcon sx={{ fontSize: 40 }} color="success" />,
    title: 'Professionelle Videoproduktion',
    description:
      'Hochwertige Postproduktion mit Fokus auf Emotion & Storytelling.',
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: 40 }} color="success" />,
    title: 'Einzigartige Perspektiven',
    description:
      'Lass deine Vision aus der Luft Realität werden – gestochen scharf und unvergesslich.',
  },
];

const LandingInfoSection = () => {
  return (
    // 2. Semantisches Tag und responsive vertikale Abstände
    <Box
      component="section"
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 6, md: 10 }, // Mehr Padding
        textAlign: 'center',
      }}
    >
      {/* 3. Container für responsives Padding und max. Breite */}
      <Container maxWidth="lg">
        {/* 4. Stack für die vertikale Anordnung der Haupt-Elemente */}
        <Stack spacing={4} alignItems="center">
          <Typography variant="h4" component="h2">
            Deine Welt aus einer neuen Perspektive
          </Typography>

          <Typography variant="body1" sx={{ maxWidth: '700px' }}>
            Wir bei FPVision fangen Momente ein, die anderen verborgen bleiben –
            mit innovativer Drohnentechnologie und einem kreativen Auge für das
            Außergewöhnliche.
          </Typography>

          {/* 5. Grid für die Features, mit extra Abstand nach oben */}
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{ pt: 4 }} // Abstand zwischen Text und Grid
          >
            {/* 6. Über das Array mappen */}
            {features.map((feature) => (
              <Grid item xs={12} md={4} key={feature.title}>
                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 3, md: 4 }, // Responsives Padding in der Karte
                    height: '100%', // 7. Sorgt für gleiche Höhe aller Karten
                  }}
                >
                  {/* 8. Stack für den Inhalt der Karte */}
                  <Stack spacing={2} alignItems="center">
                    {feature.icon}
                    <Typography variant="h6">{feature.title}</Typography>
                    <Typography variant="body2">
                      {feature.description}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* 9. CTA-Button, "size" für mehr Präsenz */}
          <Button
            variant="contained"
            color="success"
            component={Link}
            to="/about"
            size="large" // Macht den Button präsenter
            sx={{ mt: 4 }} // Extra Abstand über dem Button
          >
            Mehr über uns erfahren
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default LandingInfoSection;