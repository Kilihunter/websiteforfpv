import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './modules/navbar';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact'
import LegalFooter from './modules/legalfooter';
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
        // 🌙 Dark Mode (Angepasst von deinem Vorschlag)
        background: {
          default: '#121212', // Dein sehr dunkles Grau
          paper: 'rgb(36, 34, 34)', // Dein Navbar-Dunkel (oder '#1e1e1e')
        },
        primary: {
          main: '#90caf9', // Dein helles Blau
        },
        secondary: {
          main: '#DDAA77', // Ein helles, "sandiges" Orange für Akzente
        },
        text: {
          primary: '#F0F0F0', // Ein leicht gedämpftes Weiß (angenehmer als #fff)
          secondary: '#bbbbbb', // Dein Hellgrau
        },
      }
    :  {
        // ☀️ Light Mode ("Sand"-Thema)
        background: {
          default: '#EAE0D5', // Ein "dunkler" Sand-Hintergrund
          paper: '#FCF8F3',     // Ein hellerer "Pergament"-Ton für die Navbar/Karten
        },
        primary: {
          main: '#3D5A80', // Ein gedämpftes "Denim"-Blau als Akzent
        },
        secondary: {
          main: '#A0522D', // Ein "Rost"- oder "Terrakotta"-Ton
        },
        text: {
          primary: '#3B3121', // Ein sehr dunkles Braun (statt Schwarz)
          secondary: '#7A6C5D', // Ein helleres Braun/Grau
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <LegalFooter />
    </ThemeProvider>
  );
  
}
export default App;