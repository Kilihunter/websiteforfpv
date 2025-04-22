import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlightIcon from '@mui/icons-material/Flight';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

function LandingInfoSection() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        py: 5,
        px: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Deine Welt aus einer neuen Perspektive
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mb: 5 }}>
        Wir bei FPVision fangen Momente ein, die anderen verborgen bleiben – mit
        innovativer Drohnentechnologie und einem kreativen Auge für das Außergewöhnliche.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <FlightIcon sx={{ fontSize: 40, mb: 1 }} color="primary" />
            <Typography variant="h6">Dynamische FPV-Flüge</Typography>
            <Typography variant="body2">
              Spektakuläre Aufnahmen, die Geschwindigkeit und Präzision vereinen.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <CameraAltIcon sx={{ fontSize: 40, mb: 1 }} color="primary" />
            <Typography variant="h6">Professionelle Videoproduktion</Typography>
            <Typography variant="body2">
              Hochwertige Postproduktion mit Fokus auf Emotion & Storytelling.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <VisibilityIcon sx={{ fontSize: 40, mb: 1 }} color="primary" />
            <Typography variant="h6">Einzigartige Perspektiven</Typography>
            <Typography variant="body2">
              Lass deine Vision aus der Luft Realität werden – gestochen scharf und unvergesslich.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/about"
        sx={{ mt: 6 }}
      >
        Mehr über uns erfahren
      </Button>
    </Box>
  );
}

export default LandingInfoSection;
