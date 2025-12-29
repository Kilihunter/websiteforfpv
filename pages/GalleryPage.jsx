import React, { useState } from 'react'; 
import { Box, Typography, Dialog, DialogContent, IconButton, } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close'; 
import { Helmet } from 'react-helmet-async'; 
import backgroundImage from '../pictures/DSC04197_croped.jpg'; //
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";





// --- MODIFIED: Added the YouTube entry ---
const videoList = [
  { 
    src: "MXwbyfbNjpU", 
    title: 'Cinematic Selection', 
    type: 'youtube' // New type identifier
  },
  { src: "gZpaMKuEtWE", title: 'Sunrise in Leistadt', type: 'youtube' },
];
// -----------------------------------------

// Helper function to render video in the modal
const VideoModalContent = ({ video, handleClose }) => {
  if (!video) return null;

  // Render YouTube video using iframe
  if (video.type === 'youtube') {
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${video.src}?autoplay=1&controls=1&modestbranding=1&rel=0`;
    
    return (
      <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}> 
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: '#fff',
            zIndex: 2,
          }}
        >
          <CloseIcon />
        </IconButton>
        <iframe
          src={youtubeEmbedUrl}
          title={video.title}
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
          }}
        />
      </Box>
    );
  }

  // Render local video using <video> tag
  return (
    <>
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          color: '#fff',
          zIndex: 2,
        }}
      >
        <CloseIcon />
      </IconButton>
      <video
        src={video.src}
        controls
        autoPlay
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '80vh',
          objectFit: 'contain',
        }}
      />
    </>
  );
};

function GalleryDesktop({ backgroundImage, videoList, handleOpen, open, handleClose, selectedVideo }) {
  return (
    <>
      {/* Header-Bild */}
      <Box
        sx={{
          height: "30vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          Gallery
        </Typography>
        </Box>
      </Box>

      {/* Desktop Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          px: 4,
          py: 6,
          justifyContent: "center",
        }}
      >
        {videoList.map((video, idx) => (
          <Box
            key={idx}
            onClick={() => handleOpen(video)}
            sx={{
              width: { xs: "45%", sm: "30%", md: "22%" },
              aspectRatio: "1 / 1",
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: 3,
              transition: "transform 0.2s ease-in-out",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            {video.type === "youtube" ? (
              <Box
                sx={{
                  backgroundImage: `url(https://img.youtube.com/vi/${video.src}/hqdefault.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:after": {
                    content: '""',
                    display: "block",
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'%3E%3Cpath d=\'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14zm11-9l-8 5V5l8 5z\'/%3E%3C/svg%3E")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "50%",
                  },
                }}
              />
            ) : (
              <video
                src={video.src}
                muted
                loop
                preload="metadata"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              />
            )}

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
                textAlign: "center",
                py: 1,
                fontWeight: "bold",
                fontSize: "0.9rem",
              }}
            >
              {video.title}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Desktop Modal */}
      
    </>
  );
}



function GalleryMobile({ backgroundImage, videoList, handleOpen, open, handleClose, selectedVideo }) {
  return (
    <>
      {/* Header kleiner */}
      <Box
              sx={{
                  minHeight: { xs: "26svh", md: "34svh" },
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  pb:{xs: 3.5, md: 5 },
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
                  Gallery
                </Typography>
              </Box>
            </Box>

      {/* Mobile Grid: echte Kacheln statt mini-cards */}
      <Box sx={{ px: 2, py: 3 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 12,
          }}
        >
          {videoList.map((video, idx) => (
            <Box
              key={idx}
              onClick={() => handleOpen(video)}
              sx={{
                aspectRatio: "16 / 10",
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 10px 26px rgba(0,0,0,0.35)",
              }}
            >
              {video.type === "youtube" ? (
                <Box
                  sx={{
                    backgroundImage: `url(https://img.youtube.com/vi/${video.src}/hqdefault.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.05))",
                    },
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      left: 12,
                      top: 12,
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      backgroundColor: "rgba(0,0,0,0.7)",
                      backgroundImage:
                        'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'%3E%3Cpath d=\'M8 5v14l11-7z\'/%3E%3C/svg%3E")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "55%",
                    },
                  }}
                />
              ) : (
                <video
                  src={video.src}
                  muted
                  playsInline
                  preload="metadata"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}

              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  p: 1.2,
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  letterSpacing: 0.3,
                }}
              >
                {video.title}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

     
      
    </>
  );
}



export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // < md = mobile layout

  const handleOpen = (video) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <Helmet>
        <title>Video Gallery | FPV Drone Footage</title>
        <meta
          name="description"
          content="Cinematic FPV drone footage and photography portfolio."
        />
      </Helmet>

      {/* ✅ Nur eine Variante wird wirklich gerendert */}
      {isMobile ? (
        <GalleryMobile
          backgroundImage={backgroundImage}
          videoList={videoList}
          handleOpen={handleOpen}
        />
      ) : (
        <GalleryDesktop
          backgroundImage={backgroundImage}
          videoList={videoList}
          handleOpen={handleOpen}
        />
      )}

      {/* ✅ EIN Dialog für beide */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth={isMobile ? false : "lg"}
        PaperProps={{ sx: { backgroundColor: "black" } }}
      >
        <DialogContent sx={{ position: "relative", p: 0 }}>
          <VideoModalContent video={selectedVideo} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
}