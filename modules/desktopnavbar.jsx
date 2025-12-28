// DesktopNavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import SturmLogo from './logo'; // Angenommen, du hast ein separates Logo-Komponentenmodul

// 1. Google Font importieren
import '@fontsource/oswald/400.css';
import '@fontsource/oswald/600.css';


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
         <div style={{ color: "#0B1220", display: "flex", alignItems: "center" }}>
           <SturmLogo size={40} color="#66BB6A" />
          </div>

            <Typography
              variant="h6"
              component="div"
              sx={{
                color: hovered ? 'text.primary' : 'white', // 4. Hover-Effekt
                fontFamily: '"Oswald", sans-serif', // 5. Deine Schriftart
                fontWeight: 600,
                letterSpacing: 1,
                transition: '0.3s ease-in-out',
                userSelect: 'none',
                fontSize: { xs: '1.3rem', md: '1.7rem' }, // Responsive Größe
                whiteSpace: 'nowrap',
                lineHeight: 1.6, // 6. Verhindert Abschneiden
                overflow: 'visible',
              }}
            >
              Sturm FPV {/* 7. Dein Name */}
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