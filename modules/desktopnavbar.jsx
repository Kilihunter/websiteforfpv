// DesktopNavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

// 1. Google Font importieren
import "@fontsource/pacifico";

// Die Navigations-Links (bleiben gleich)
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

function DesktopNavbar() {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: 'absolute',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        zIndex: 100,
        transition: 'all 0.3s ease-in-out',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: hovered ? 'background.default' : 'transparent',
          boxShadow: 'none',
          borderRadius: '15px',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar>
          
          {/* --- ANPASSUNG START --- */}
          {/* 2. Box für Logo + Titel */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, overflow: 'visible' }}>
            <img
              src="/websiteforfpv/pictures/logo.png" // 3. Dein Logo
              alt="FPV-Flow Logo"
              style={{ 
                height: '36px', // Etwas größer für Desktop
                width: '36px',  // Quadratisch machen
                objectFit: 'contain', 
                cursor: 'pointer', 
                marginRight: '12px' 
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: hovered ? 'text.primary' : 'white', // 4. Hover-Effekt
                fontFamily: 'Pacifico, cursive', // 5. Deine Schriftart
                fontWeight: 400,
                letterSpacing: 1,
                transition: '0.3s ease-in-out',
                userSelect: 'none',
                fontSize: { xs: '1.3rem', md: '1.7rem' }, // Responsive Größe
                whiteSpace: 'nowrap',
                lineHeight: 1.6, // 6. Verhindert Abschneiden
                overflow: 'visible',
              }}
            >
              FPV-Flow by Sturm {/* 7. Dein Name */}
            </Typography>
          </Box>
          {/* --- ANPASSUNG ENDE --- */}
          
          {/* Nur die Desktop-Buttons */}
          <Box>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                variant="text"
                disableRipple
                sx={{
                  color: hovered ? 'text.primary' : 'white',
                  backgroundColor: 'transparent',
                  transition: '0.3s ease-in-out',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default DesktopNavbar;