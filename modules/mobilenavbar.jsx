import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Fade,
  Backdrop,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

// === HIER IST DIE KORREKTUR ===
// Öffnen (Enter)
const APPBAR_ENTER_DURATION = 0;     // 0ms (sofort eckig) - Das war KORREKT
const COLLAPSE_ENTER_DURATION = 225; // Das Menü klappt normal auf
const FADE_ENTER_DELAY = 75;         // Verzögerung pro Menüpunkt

// Schließen (Exit)
const COLLAPSE_EXIT_DURATION = 400;  // Das Menü fährt langsam ein (MASTER-DAUER)
const APPBAR_EXIT_DURATION = 150;    // Die Ecken-Animation selbst dauert 150ms
const FADE_EXIT_DURATION = 250;      // Die Schrift verschwindet

// DIE LÖSUNG: Berechnete Verzögerung für die AppBar
const APPBAR_EXIT_DELAY = COLLAPSE_EXIT_DURATION - APPBAR_EXIT_DURATION; // 400 - 150 = 250ms

// === ENDE DER KORREKTUR ===

function MobileNavbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Backdrop
        open={isMenuOpen}
        onClick={handleMenuClose}
        sx={{ 
          zIndex: 99, 
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}
      />

      <Box
        sx={{
          flexGrow: 1,
          position: 'absolute',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          zIndex: 100,
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: 'background.default',
            boxShadow: 'none',
            borderRadius: isMenuOpen ? '15px 15px 0 0' : '15px',
            
            // Die Transition nutzt jetzt den berechneten DELAY
            transition: (theme) =>
              theme.transitions.create('border-radius', {
                duration: isMenuOpen
                  ? APPBAR_ENTER_DURATION  // 0ms
                  : APPBAR_EXIT_DURATION,  // 150ms
                easing: isMenuOpen
                  ? theme.transitions.easing.sharp
                  : theme.transitions.easing.easeOut,
                
                // HIER IST DIE ÄNDERUNG:
                delay: isMenuOpen
                  ? 0                     // 0ms Verzögerung beim Öffnen
                  : APPBAR_EXIT_DELAY,  // 250ms Verzögerung beim Schließen
              }),
          }}
        >
          {/* ... Rest der AppBar ... */}
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: 'white' }}
            >
              AeroLens Aerials
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="end"
              onClick={handleMenuToggle}
              sx={{ 
                color: 'white',
                transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 300ms ease',
              }}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Das Menü, das ausklappt */}
        <Collapse
          in={isMenuOpen}
          timeout={{
            enter: COLLAPSE_ENTER_DURATION, // 225ms
            exit: COLLAPSE_EXIT_DURATION,   // 400ms
          }}
          unmountOnExit
        >
          <Box
            sx={{
              backgroundColor: 'background.default',
              borderRadius: '0 0 15px 15px',
            }}
          >
            <List component="nav" sx={{ paddingTop: 0, paddingBottom: 0 }}>
              {navItems.map((item, index) => (
                <Fade
                  key={item.label}
                  in={isMenuOpen}
                  timeout={{
                    enter: COLLAPSE_ENTER_DURATION + (index * FADE_ENTER_DELAY),
                    exit: FADE_EXIT_DURATION,
                  }}
                >
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={handleMenuClose}
                    sx={{
                      textAlign: 'center',
                      color: 'white',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </Fade>
              ))}
            </List>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}

export default MobileNavbar;