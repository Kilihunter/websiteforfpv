// components/ScrollDownArrow.tsx
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
`;

function ScrollDownArrow() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
        animation: `${bounce} 1.5s infinite`,
        cursor: 'pointer',
        color: 'white',
      }}
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      }}
    >
      <KeyboardArrowDownIcon fontSize="large" />
    </Box>
  );
};

export default ScrollDownArrow;
