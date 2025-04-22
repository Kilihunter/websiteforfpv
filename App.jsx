import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './modules/navbar';
import GalleryPage from './pages/GalleryPage';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo } from 'react';


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
  () =>
    createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
        ...(prefersDarkMode
          ? {
              // 🌙 Dark Mode Farben
              background: {
                default: '#121212',
                paper: '#1e1e1e',
              },
              primary: {
                main: '#90caf9',
              },
              text: {
                primary: '#ffffff',
                secondary: '#bbbbbb',
              },
            }
          : {
              // ☀️ Light Mode Farben
              background: {
                default: '#ffffff',
                paper: '#f5f5f5',
              },
              primary: {
                main: '#1976d2',
              },
              text: {
                primary: '#000000',
                secondary: '#333333',
              },
            }),
      },
    }),
  [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
  
}
export default App;