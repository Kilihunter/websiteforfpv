// components/ScrollDownArrow.tsx
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, IconButton } from '@mui/material'; // Wir tauschen Box-Logik gegen IconButton
// 'keyframes' von @emotion/react wird nicht mehr benötigt

function ScrollDownArrow() {
  return (
    // 1. Der Box-Container ist jetzt NUR für das Layout (Zentrierung, Abstand)
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
      }}
    >
      {/* 2. Der IconButton ist für die Aktion, Animation und A11Y */}
      <IconButton
        aria-label="Nach unten scrollen" // WICHTIG für Barrierefreiheit
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
        sx={{
          // 3. Theme-Farbe statt 'white'
          color: 'text.primary', 
          
          // 4. Animation sauber direkt in sx definieren
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '50%': {
              transform: 'translateY(8px)',
            },
          },
          animation: 'bounce 1.5s infinite',
        }}
      >
        <KeyboardArrowDownIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ScrollDownArrow;