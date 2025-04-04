"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaCommentAlt, FaHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";

export default function FeaturedProjects() {
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [carouselInViewRef, carouselInView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (carouselInView) {
      setIsScrollLocked(true);

      const carouselBottom =
        carouselRef.current!.offsetTop + carouselRef.current!.offsetHeight;
      const start = window.scrollY;
      const distance = carouselBottom - window.innerHeight - start;
      const duration = 1000;
      let startTime: number;

      const animateScroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        window.scrollTo(0, start + distance * percentage);

        if (progress < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);

      // Release the scroll lock after 7 seconds
      const timeout = setTimeout(() => {
        setIsScrollLocked(false);
      }, 7000);

      return () => clearTimeout(timeout);
    }
  }, [carouselInView]);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (isScrollLocked) {
        e.preventDefault();

        const carouselBottom =
          carouselRef.current!.offsetTop + carouselRef.current!.offsetHeight;
        window.scrollTo(0, carouselBottom - window.innerHeight);
      }
    };

    if (isScrollLocked) {
      window.addEventListener("scroll", handleScroll, { passive: false });
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollLocked]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="featured-projects" ref={carouselRef}>
      <Image
        src="/images/projects-bubble.png"
        alt="logo"
        width={185}
        height={141}
        className="about-bubble-two"
      />
      <div className="featured-project-details">
        <h2>Featured projects</h2>
        <p className="view-all">
          Some of our best works <span>View All</span>
        </p>

        <div className="project-carousel">
          <div ref={carouselInViewRef} />
          <Slider {...settings}>
            <div className="indiv-project">
              <Image
                src="/images/gamz-poster.png"
                alt="logo"
                width={830}
                height={477}
              />
              <div className="project-details">
                <div className="project-name-desc">
                  <div className="project-name">
                    <h3>Gamz Holdings</h3>
                    <p>2024</p>
                  </div>
                  <p className="project-desc">
                    At DanielBlac Devhub, we bring your ideas to life with
                    innovative web and app solutions. We specialize in creating
                    sleek
                  </p>
                </div>
                <div className="project-interactions">
                  <div className="interactions">
                    <div className="inter-icon">
                      <FaHeart size={18} />
                    </div>
                    <p>1.5k</p>
                  </div>
                  <div className="interactions">
                    <div className="inter-icon">
                      <FaCommentAlt size={18} />
                    </div>
                    <p>2.5k</p>
                  </div>
                  <div className="interactions">
                    <div className="inter-icon">
                      <IoEyeSharp size={24} />
                    </div>
                    <p>8.5k</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="indiv-project">
              <Image
                src="/images/gamz-poster.png"
                alt="logo"
                width={830}
                height={477}
              />
              <div className="project-details">
                <div className="project-name-desc">
                  <div className="project-name">
                    <h3>Gamz Holdings</h3>
                    <p>2024</p>
                  </div>
                  <p className="project-desc">
                    At DanielBlac Devhub, we bring your ideas to life with
                    innovative web and app solutions. We specialize in creating
                    sleek
                  </p>
                </div>
                <div className="project-interactions">
                  <div className="interactions">
                    <div className="inter-icon">
                      <FaHeart size={18} />
                    </div>
                    <p>1.5k</p>
                  </div>
                  <div className="interactions">
                    <div className="inter-icon">
                      <FaCommentAlt size={18} />
                    </div>
                    <p>2.5k</p>
                  </div>
                  <div className="interactions">
                    <div className="inter-icon">
                      <IoEyeSharp size={24} />
                    </div>
                    <p>8.5k</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="indiv-project">
              <Image
                src="/images/gamz-poster.png"
                alt="logo"
                width={830}
                height={477}
              />
              <div className="project-details">
                <div className="project-name-desc">
                  <div className="project-name">
                    <h3>Gamz Holdings</h3>
                    <p>2024</p>
                  </div>
                  <p className="project-desc">
                    At DanielBlac Devhub, we bring your ideas to life with
                    innovative web and app solutions. We specialize in creating
                    sleek
                  </p>
                </div>
                <div className="project-interactions">
                  <div className="interactions">
                    <div className="inter-icon">
                      <FaHeart size={18} />
                    </div>
                    <p>1.5k</p>
                  </div>
                  <div className="interactions">
                    <div className="inter-icon">
                      <FaCommentAlt size={18} />
                    </div>
                    <p>2.5k</p>
                  </div>
                  <div className="interactions">
                    <div className="inter-icon">
                      <IoEyeSharp size={24} />
                    </div>
                    <p>8.5k</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
