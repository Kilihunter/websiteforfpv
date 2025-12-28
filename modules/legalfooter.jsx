import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function LegalFooter() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        background: 'background.default',
        color: '#fff',
        py: 3,
        px: 2,
        mt: 8,
        textAlign: 'center',
        fontSize: { xs: 12, sm: 14 },
      }}
    >
      <Typography variant="body2" sx={{ mb: 1,  color: 'text.primary'}}>
        &copy; {new Date().getFullYear()} Sturm FPV. Alle Rechte vorbehalten.
      </Typography>
      <Typography variant="body2">
        <Link href="#" underline="hover" color="inherit" sx={{ mx: 1, color: 'text.primary'}}>
          Impressum
        </Link>
        |
        <Link href="#" underline="hover" color="inherit" sx={{ mx: 1, color: 'text.primary'}}>
          Datenschutz
        </Link>
      </Typography>
    </Box>
  );
}

export default LegalFooter;