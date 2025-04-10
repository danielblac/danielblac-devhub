"use client";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function HomeAbout() {
  const router = useRouter();
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end end"],
  });

  // Map scroll progress to the top position of the scroll-line
  const scrollLineTop = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

  // Split text into words while preserving spaces
  const text =
    "At DanielBlac DevHub, we bring your ideas to life with innovative web and app solutions. We specialize in creating sleek, functional, and user-friendly digital experiences tailored to startups and growing businesses. Whether you need a standout website, custom application, or expert UI/UX design, our team is here to deliver fast, reliable, and affordable results. Let’s build something great together!";
  const words = text.split(" "); // Split by spaces

  return (
    <div className="home-about" id="about">
      <Image
        src="/images/about-bubble.png"
        alt="logo"
        width={198}
        height={203}
        className="about-bubble-one"
      />
      <Image
        src="/images/projects-bubble.png"
        alt="logo"
        width={100}
        height={91}
        className="about-bubble-two"
      />
      <div className="about-details">
        <h2>About Us</h2>
        <div className="about-msg-links">
          <p className="about-msg" ref={textRef}>
            {words.map((word, index) => (
              <InView key={index} threshold={0.5} triggerOnce={false}>
                {({ inView, ref }) => (
                  <motion.span
                    ref={ref}
                    className="about-msg"
                    animate={
                      inView ? { color: "#241b49" } : { color: "inherit" }
                    }
                    transition={{ delay: index * 0.05 }} // Delay each word's animation
                  >
                    {word} {/* Add a space after each word */}
                  </motion.span>
                )}
              </InView>
            ))}
          </p>
          <div className="bar-links">
            <div className="scroll-bar">
              <motion.div
                className="scroll-line"
                style={{
                  top: scrollLineTop, // Move scroll-line based on scroll progress
                }}
              />
            </div>
            <div className="links">
              <FaXTwitter size={24} style={{ cursor: "pointer" }} />
              <FaWhatsapp size={24} style={{ cursor: "pointer" }} />
              <FaInstagram size={24} style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>

        <p className="about-question">
          Have an amazing idea you’d like to bring to life?
        </p>

        <div className="trust">
          <Image
            src="/images/multi-users.png"
            alt="logo"
            width={100}
            height={65}
          />
          <div className="trust-numbers">
            <h3>Over 50+</h3>
            <span>Business Owners Trust Us</span>
          </div>
        </div>

        <Button padding="0.7em 1.5em" onClick={() => router.push("/contact")}>
          <span>Let&apos;s Talk</span>
          <MdOutlineKeyboardArrowRight size={24} />
        </Button>
      </div>
    </div>
  );
}
