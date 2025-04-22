import React, { useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import backgroundImage from '/pictures/images.jpeg';

const videoList = [
  { src: '/videos/DJI_0237.MP4', title: 'Mountain Fly' },
  { src: '/videos/DJI_0239.MP4', title: 'City Dive' },
];

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
      {/* Header-Bild */}
      <Box
        sx={{
          height: '50vh',
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
            px: 3,
            py: 1,
            borderRadius: 2,
          }}
        >
          Galerie
        </Typography>
      </Box>

      {/* Flexbox Video-Kacheln */}
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
              width: { xs: '45%', sm: '30%', md: '22%' }, // immer mindestens zwei nebeneinander
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

      {/* Video Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        PaperProps={{ sx: { backgroundColor: 'black' } }}
      >
        <DialogContent sx={{ position: 'relative', p: 0 }}>
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
          {selectedVideo && (
            <video
              src={selectedVideo.src}
              controls
              autoPlay
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GalleryPage;
