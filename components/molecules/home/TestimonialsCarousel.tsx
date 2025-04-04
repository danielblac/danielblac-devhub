"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah L.",
    role: "Startup Founder",
    quote:
      "DanielBlac DevHub transformed our vision into a stunning website in record time. Their team understood our needs perfectly and delivered beyond our expectations. Highly recommended!",
    avatar: "/images/avatar-one.png",
  },
  {
    id: 2,
    name: "Michael R.",
    role: "Marketing Director",
    quote:
      "Working with DanielBlac DevHub was a game-changer for our online presence. The attention to detail and creative solutions they provided exceeded our expectations.",
    avatar: "/images/avatar-two.png",
  },
  {
    id: 3,
    name: "Jessica T.",
    role: "E-commerce Manager",
    quote:
      "The team at DanielBlac DevHub helped us increase our conversion rate by 40% with their innovative design approach. The process was smooth and the results speak for themselves.",
    avatar: "/images/avatar-three.png",
  },
  {
    id: 4,
    name: "David K.",
    role: "Tech Entrepreneur",
    quote:
      "I've worked with many dev teams, but DanielBlac DevHub stands out for their technical excellence and creative problem-solving. They deliver on time, every time.",
    avatar: "/images/avatar-four.png",
  },
];

const TestimonialsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManualSelect, setIsManualSelect] = useState(false);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const cycleTime = 5000;

  useEffect(() => {
    const startTime = Date.now();
    let frameId: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / cycleTime) * 100;

      if (newProgress < 100) {
        setProgress(newProgress);
        frameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsManualSelect(false);
      }
    };

    // Start the animation
    frameId = requestAnimationFrame(updateProgress);
    animationRef.current = frameId;

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [activeIndex, isManualSelect]);

  // Reset animation when changing testimonial
  useEffect(() => {
    setProgress(0);
  }, [activeIndex]);

  const handleAvatarClick = (index: number) => {
    if (index === activeIndex) return;

    // Cancel current animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setActiveIndex(index);
    setIsManualSelect(true);
    setProgress(0);
  };

  return (
    <div className="testimonials-container">
      <div className="avatars-column">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={
              activeIndex === index ? "avatar_wrapper-active" : "avatar_wrapper"
            }
            onClick={() => handleAvatarClick(index)}
          >
            {activeIndex === index && (
              <div className="avatar-border">
                <svg viewBox="0 0 100 100" className="progress-ring">
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    className="animated-circle"
                    strokeDasharray="302"
                    strokeDashoffset={302 - (302 * progress) / 100}
                  />
                </svg>
              </div>
            )}
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={60}
              height={60}
              className="avatar-image"
            />
          </div>
        ))}
      </div>

      <div className="testimonial-card-container">
        {/* Active testimonial card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[activeIndex].id}
            className="active-testimonial-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="shiny-border">
              <div className="shiny-effect" />
            </div>
            <p className="quote">
              &ldquo; {testimonials[activeIndex].quote} &rdquo;
            </p>
            <p className="name">{`${testimonials[activeIndex].name}, ${testimonials[activeIndex].role}`}</p>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key="skeleton-card"
            className="skeleton-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3 },
            }}
            exit={{
              opacity: 0,
              x: -100,
              transition: { duration: 0.3 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="skeleton-line" style={{ width: "65%" }}></div>
            <div className="skeleton-line-two" style={{ width: "35%" }}></div>
            <div className="skeleton-line-three" style={{ width: "35%" }}></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
