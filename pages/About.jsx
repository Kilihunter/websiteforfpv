import React from 'react'; 
import { Helmet } from 'react-helmet-async'; 
import { Box, Typography, Grid, Container } from '@mui/material'; 
import backgroundImage from '/pictures/DSC04197_croped.jpg'; 
import myImage from '/pictures/DSC04175.jpg';

// ✅ dein bestehendes Desktop-Layout (unverändert)
function AboutDesktop() {
  return (
    <>
     <Box
        sx={{
          height: '30vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: "relative",
            px: { xs: 2.5, md: 4 },
            py: { xs: 1.2, md: 1.8 },
            borderRadius: 3,
            bgcolor: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(6px)",
          }}
        >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
              fontWeight: 900,
              letterSpacing: 2,
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              lineHeight: 1,
          }}
        >
          About
        </Typography>
        </Box>
      </Box>

      {/* Neuer Inhalt, zentriert */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Erster Abschnitt: Bild links, Text rechts */}
        <Grid container spacing={4} justifyContent="center" mb={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                p: 4,
                borderRadius: 2,
              }}
            >
             <Typography variant="h3" gutterBottom>
        Hi, ich bin Kilian von Sturm FPV!
        
        </Typography>
        <Typography variant="body1">
        Seit mehreren Monaten bin ich mit voller Begeisterung in der Welt der FPV-Drohnen unterwegs. FPV steht für First Person View – das bedeutet, ich fliege meine Drohnen mit einer speziellen Videobrille und sehe dabei in Echtzeit genau das, was die Drohne sieht. So wird jeder Flug zu einem immersiven Erlebnis – und das sieht man auch in meinen Aufnahmen.

Durch diese Technik kann ich extrem präzise manövrieren – durch enge Räume, unter Hindernissen hindurch oder mitten durch spannende Locations. Im Gegensatz zu klassischen Kameradrohnen sind meine FPV-Drohnen auf Geschwindigkeit, Agilität und kreative Freiheit ausgelegt.

Ob für actionreiche Werbevideos, besondere Eventaufnahmen oder spektakuläre Luftbilder für Social Media – ich zeige Perspektiven, die im Kopf bleiben. Mein Ziel: Aufnahmen, die Emotionen wecken und in Erinnerung bleiben.
        </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Zweiter Abschnitt: Text links, Bild rechts */}
        <Grid container spacing={2} justifyContent="center">
          <Grid size={8}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
                textAlign: 'center',
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Wer steckt dahinter?
              </Typography>
              <Typography variant="body1">
                Ich bin Kilian, der Kopf, Pilot und kreative Motor hinter Sturm FPV. Im Bild siehst du mich gerade bei der Vorbereitung einer meiner speziell angefertigten FPV-Drohnen.

Als dein direkter Ansprechpartner – vom ersten Konzept bis zur finalen Aufnahme – verbinde ich technisches Flugkönnen mit einem filmischen Auge. Mein Anspruch ist es, deine Vision ohne Umwege in packende Bilder zu verwandeln.
              </Typography>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box
              sx={{
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'right',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={myImage}
                alt="Bild 2"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>

  );
}

// ✅ das neue Mobile-Layout (deine verbesserte Version)
function AboutMobile() {
  return (
    <>
      <Helmet>
        <title>About | Sturm FPV</title>
        <meta name="description" content="Cinematic FPV drone footage and photography portfolio." />
      </Helmet>

      {/* Header */}
      <Box
        sx={{
          minHeight: { xs: "21svh", md: "34svh" },
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          pb: { xs: 3.5, md: 5},
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            px: { xs: 2.5, md: 4 },
            py: { xs: 1.2, md: 1.8 },
            borderRadius: 3,
            bgcolor: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 900,
              letterSpacing: 2,
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              lineHeight: 1,
            }}
          >
            About
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Abschnitt 1 */}
        <Grid container spacing={{ xs: 3, md: 5 }} justifyContent="center">
          <Grid item xs={12} md={10}>
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                bgcolor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(6px)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2rem", md: "2.6rem" },
                  lineHeight: 1.1,
                  mb: 2,
                  textAlign: { xs: "left", md: "center" },
                }}
              >
                Hi, ich bin Kilian von Sturm FPV!
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  lineHeight: 1.8,
                  opacity: 0.92,
                  textAlign: { xs: "left", md: "center" },
                  maxWidth: 900,
                  mx: "auto",
                }}
              >
                Seit mehreren Monaten bin ich mit voller Begeisterung in der Welt der FPV-Drohnen unterwegs. FPV steht
                für First Person View – das bedeutet, ich fliege meine Drohnen mit einer speziellen Videobrille und sehe
                dabei in Echtzeit genau das, was die Drohne sieht. So wird jeder Flug zu einem immersiven Erlebnis – und
                das sieht man auch in meinen Aufnahmen.
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  lineHeight: 1.8,
                  opacity: 0.92,
                  textAlign: { xs: "left", md: "center" },
                  maxWidth: 900,
                  mx: "auto",
                }}
              >
                Dadurch kann ich extrem präzise manövrieren – durch enge Räume, unter Hindernissen hindurch oder mitten
                durch spannende Locations. Im Gegensatz zu klassischen Kameradrohnen sind meine FPV-Drohnen auf
                Geschwindigkeit, Agilität und kreative Freiheit ausgelegt.
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  lineHeight: 1.8,
                  opacity: 0.92,
                  textAlign: { xs: "left", md: "center" },
                  maxWidth: 900,
                  mx: "auto",
                }}
              >
                Ob für actionreiche Werbevideos, besondere Eventaufnahmen oder spektakuläre Luftbilder für Social Media –
                ich zeige Perspektiven, die im Kopf bleiben. Mein Ziel: Aufnahmen, die Emotionen wecken und in Erinnerung
                bleiben.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Abschnitt 2 */}
        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: { xs: 4, md: 6 } }}
        >
          {/* Bild: auf Mobile oben */}
          <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: 220, sm: 260, md: "100%" },
                mx: { xs: "auto", md: 0 },
                aspectRatio: "1 / 1",
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
              }}
            >
              <Box
                component="img"
                src={myImage}
                alt="Kilian – Sturm FPV"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }
                }
              />
            </Box>
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                bgcolor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(6px)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "1.6rem", md: "2.0rem" },
                  mb: 1.5,
                  textAlign: { xs: "left", md: "left" },
                }}
              >
                Wer steckt dahinter?
              </Typography>

              <Typography sx={{ fontSize: { xs: "1rem", md: "1.05rem" }, lineHeight: 1.8, opacity: 0.92 }}>
                Ich bin Kilian, der Kopf, Pilot und kreative Motor hinter Sturm FPV. Im Bild siehst du mich gerade bei
                der Vorbereitung einer meiner speziell angefertigten FPV-Drohnen.
              </Typography>

              <Typography sx={{ mt: 2, fontSize: { xs: "1rem", md: "1.05rem" }, lineHeight: 1.8, opacity: 0.92 }}>
                Als dein direkter Ansprechpartner – vom ersten Konzept bis zur finalen Aufnahme – verbinde ich
                technisches Flugkönnen mit einem filmischen Auge. Mein Anspruch ist es, deine Vision ohne Umwege in
                packende Bilder zu verwandeln.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Sturm FPV</title>
        <meta name="description" content="Cinematic FPV drone footage and photography portfolio." />
      </Helmet>

      {/* Nur Mobile (xs/sm) */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <AboutMobile />
      </Box>

      {/* Ab md aufwärts (Desktop/Tablet) */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <AboutDesktop />
      </Box>
    </>
  );
}
