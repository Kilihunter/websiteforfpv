import React, { useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Helmet } from 'react-helmet-async';
import backgroundImage from '../pictures/DSC04197_croped.jpg'; // Assuming 'pictures' is a folder next to 'pages'

// Define the ID for your YouTube video
const YOUTUBE_VIDEO_ID = "MXwbyfbNjpU";

// --- MODIFIED: Added the YouTube entry ---
const videoList = [
  { 
    src: YOUTUBE_VIDEO_ID, 
    title: 'Cinematic Selection', 
    type: 'youtube' // New type identifier
  },
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


function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

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
        <meta name="description" content="Cinematic FPV drone footage and photography portfolio." />
      </Helmet>
      
      {/* Header-Bild (Unchanged) */}
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
        <Typography
          variant="h2"
          sx={{
            color: '#fff',
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 2,
          }}
        >
          Gallery
        </Typography>
      </Box>

      {/* Flexbox Video-Kacheln (Modified to use Local Video for Previews) */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 24,
          px: 4,
          py: 6,
          justifyContent: 'center',
        }}
      >
        {videoList.map((video, idx) => (
          <Box
            key={idx}
            onClick={() => handleOpen(video)}
            sx={{
              width: { xs: '45%', sm: '30%', md: '22%' },
              aspectRatio: '1 / 1',
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: 3,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            {/* Display static background image for YouTube previews 
                or the local video tag for local files */}
            {video.type === 'youtube' ? (
              <Box
                // YouTube Thumbnail URL: https://img.youtube.com/vi/<ID>/hqdefault.jpg
                sx={{
                  backgroundImage: `url(https://img.youtube.com/vi/${video.src}/hqdefault.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // Optional: Add a play icon overlay for YouTube
                  '&:after': {
                    content: '""',
                    display: 'block',
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    backgroundImage: 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'%3E%3Cpath d=\'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14zm11-9l-8 5V5l8 5z\'/%3E%3C/svg%3E")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: '50%',
                  }
                }}
              />
            ) : (
              <video
                src={video.src}
                muted
                loop
                preload="metadata"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              />
            )}
            
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#fff',
                textAlign: 'center',
                py: 1,
                fontWeight: 'bold',
                fontSize: '0.9rem',
              }}
            >
              {video.title}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Video Modal (Now uses the helper component) */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        PaperProps={{ sx: { backgroundColor: 'black' } }}
      >
        <DialogContent sx={{ position: 'relative', p: 0 }}>
          <VideoModalContent 
            video={selectedVideo} 
            handleClose={handleClose} 
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GalleryPage;