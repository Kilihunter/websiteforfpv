// DesktopNavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

// Die Navigations-Links (werden hier gebraucht)
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

function DesktopNavbar() {
  const [hovered, setHovered] =useState(false);

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
              transition: '0.3s ease-in-out',
            }}
          >
            AeroLens Aerials
          </Typography>
          
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
                  color: hovered ? 'white' : 'black',
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