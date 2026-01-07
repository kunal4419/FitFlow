import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react";

export default function VideoPlayer({ videoSrc, title, onClose, isOpen }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    let timeout;
    if (showControls && isPlaying) {
      timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showControls, isPlaying]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      // Auto-play video when opened
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
        console.log("Autoplay prevented by browser policy");
      });
    }
  }, [isOpen]);

  useEffect(() => {
    // Handle escape key to close video
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeVideoPlayer();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const closeVideoPlayer = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    onClose();
  };

  const handleMouseMove = () => {
    setShowControls(true);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={closeVideoPlayer}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
        onMouseMove={handleMouseMove}
      >
        {/* Video Container */}
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            className="w-full aspect-video"
            src={videoSrc}
            muted={isMuted}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => {
              console.log("Video failed to load:", videoSrc);
            }}
          />

          {/* Permanent Close Button - Always Visible */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeVideoPlayer();
            }}
            className="absolute top-4 right-4 z-20 text-white/90 hover:text-white p-2.5 transition-all duration-200 hover:bg-black/60 rounded-full backdrop-blur-md border border-white/30 hover:border-white/60 hover:scale-110"
            title="Close video"
          >
            <X size={18} />
          </button>

          {/* Controls Overlay */}
          <div className="absolute inset-0">
            {/* Title Bar - Auto-hiding */}
            <motion.div 
              initial={{ opacity: 1 }}
              animate={{ opacity: showControls ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4 pr-16"
            >
              <h3 className="text-white font-medium">{title}</h3>
            </motion.div>

            {/* Playback Controls - Auto-hiding */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: showControls ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 pointer-events-none"
            >

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
              <button
                onClick={togglePlay}
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause size={24} className="text-white" />
                ) : (
                  <Play size={24} className="text-white ml-1" />
                )}
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pointer-events-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlay}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  
                  <button
                    onClick={toggleMute}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>

                <div className="text-white/60 text-sm">
                  Exercise Tutorial
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
