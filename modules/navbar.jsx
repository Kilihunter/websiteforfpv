import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Navbar() {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: 'absolute',           // Damit die Navbar über dem Video liegt
        top: 20,                        // Abstand vom oberen Rand (anpassbar)
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',                   // Breite der Navbar
        zIndex: 10,                     // Höhere Priorität, damit sie immer sichtbar ist
        transition: 'all 0.3s ease-in-out',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: hovered ? 'rgb(36, 34, 34)' : 'transparent',
          boxShadow: 'none',
          borderRadius: '15px',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: hovered ? 'white' : 'black',
              transition: '0.3s ease-in-out'
            }}
          >
          AeroLens Aerials
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="text"
            disableRipple
            sx={{
              color: hovered ? 'white' : 'black',
              backgroundColor: 'transparent',
              transition: '0.3s ease-in-out'
              
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            variant="text"
            disableRipple
            sx={{
              color: hovered ? 'white' : 'black',
              backgroundColor: 'transparent',
              transition: '0.3s ease-in-out'
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/gallery"
            variant="text"
            disableRipple
            sx={{
              color: hovered ? 'white' : 'black',
              backgroundColor: 'transparent',
              transition: '0.3s ease-in-out'
            }}
          >
            Gallery
          </Button>
          <Button
            component={Link}
            to="/contact"
            disableRipple
            variant="text"
            sx={{
              color: hovered ? 'white' : 'black',
              backgroundColor: 'transparent',
              transition: '0.3s ease-in-out'
            }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
