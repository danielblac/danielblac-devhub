"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const SlantedVideoAnimation = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        videoRef.current.muted = false; // Unmute the video when playing
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
    resetTimeout();
  };

  const handleMouseLeave = () => {
    resetTimeout();
  };

  const handleClick = () => {
    togglePlayPause();
    setShowControls(true);
    resetTimeout();
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 800);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="video-container">
      <motion.div
        ref={ref}
        className="custom-video-container"
        initial={{ transform: "rotateX(30deg)" }}
        animate={{
          transform: inView ? "rotateX(0deg)" : "rotateX(30deg)",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <video
          ref={videoRef}
          src="/images/Elevate_Your_Brand_Today.mp4"
          controls={false}
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {showControls && (
          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <FaPause color="#F7F7F7" size={30} />
            ) : (
              <FaPlay color="#F7F7F7" size={30} />
            )}
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default SlantedVideoAnimation;
