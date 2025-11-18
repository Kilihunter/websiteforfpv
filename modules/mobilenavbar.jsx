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
import logo from '/pictures/logo.png';


// 1. Google Font importieren
import "@fontsource/pacifico";

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

// ... (Deine Animations-Konstanten) ...
const APPBAR_ENTER_DURATION = 0;
const COLLAPSE_ENTER_DURATION = 225;
const FADE_ENTER_DELAY = 75;
const COLLAPSE_EXIT_DURATION = 400;
const APPBAR_EXIT_DURATION = 150;
const FADE_EXIT_DURATION = 250;
const APPBAR_EXIT_DELAY = COLLAPSE_EXIT_DURATION - APPBAR_EXIT_DURATION;


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
          backgroundColor: 'rgba(75, 75, 75, 0.5)'
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
            
            transition: (theme) =>
              theme.transitions.create('border-radius', {
                duration: isMenuOpen
                  ? APPBAR_ENTER_DURATION
                  : APPBAR_EXIT_DURATION,
                easing: isMenuOpen
                  ? theme.transitions.easing.sharp
                  : theme.transitions.easing.easeOut,
                delay: isMenuOpen
                  ? 0
                  : APPBAR_EXIT_DELAY,
              }),
          }}
        >
          <Toolbar>
            {/* Wrapper für Logo + Text, verhindert Überlaufen */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, overflow: 'visible' }}>
              <img
                src={logo}
                alt="FPV-Flow Logo"
                style={{ 
                  height: '30px', 
                  width: '30px', // Stellt sicher, dass es quadratisch ist
                  objectFit: 'contain', 
                  cursor: 'pointer', 
                  marginRight: '10px' 
                }}
              />
              {/* Hier ist die geänderte Typography */}
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: 'text.primary',
                  fontFamily: 'Pacifico, cursive',
                  fontWeight: 400,
                  letterSpacing: 1,
                  userSelect: 'none',
                  fontSize: '1.3rem',
                  whiteSpace: 'nowrap',
                  
                  // --- KORREKTUR ---
                  lineHeight: 1.6, // Mehr Platz für die Schrift
                  overflow: 'visible', // Verhindert Abschneiden
                }}
              >
                FPV-Flow by Sturm
              </Typography>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="end"
              onClick={handleMenuToggle}
              sx={{ 
                color: 'text.primary',
                transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 300ms ease',
              }}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Das Menü, das ausklappt (bleibt alles gleich) */}
        <Collapse
          in={isMenuOpen}
          timeout={{
            enter: COLLAPSE_ENTER_DURATION,
            exit: COLLAPSE_EXIT_DURATION,
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
                      color: 'text.primary',
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