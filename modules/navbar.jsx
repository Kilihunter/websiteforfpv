// Navbar.js
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import MobileNavbar from './mobilenavbar';   // Importiere die neue Mobile-Version
import DesktopNavbar from './desktopnavbar'; // Importiere die neue Desktop-Version

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Das ist die von dir gewünschte Logik:
  if (isMobile) {
    return <MobileNavbar />;
  } else {
    return <DesktopNavbar />;
  }
}

export default Navbar;