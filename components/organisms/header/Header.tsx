"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBars, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/atoms/Button";
import { SwipeableDrawer } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  // DECLARATIONS
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <header className="header">
        <Link href="/">
          <div className="logo">
            <Image src="/images/logo.jpg" alt="logo" width={35} height={35} />
            <p>DanielBlac DevHub</p>
          </div>
        </Link>
        <div className="nav">
          <motion.div
            className="available"
            animate={{ marginRight: isNavbarOpen ? 5 : 0 }} // Slide out by 120px
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
          >
            <motion.div
              className="beep"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255, 124, 44, 0.7)",
                  "0 0 0 12px rgba(255, 124, 44, 0)",
                  "0 0 0 0 rgba(255, 124, 44, 0)",
                ],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <p>Available for work</p>
          </motion.div>
          <div
            className="navbar"
            onMouseEnter={() => setIsNavbarOpen(true)}
            onMouseLeave={() => setIsNavbarOpen(false)}
          >
            <AnimatePresence>
              {isNavbarOpen ? (
                <motion.nav
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={navVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Link href="/">
                    <p>:Home</p>
                  </Link>
                  <Link href="/services">
                    <p>:Services</p>
                  </Link>
                  <Link href="/projects">
                    <p>:Projects</p>
                  </Link>
                  <Link href="/contact">
                    <p>:Contact Us</p>
                  </Link>
                </motion.nav>
              ) : (
                <div className="bar">
                  <FaBars size={16} />
                </div>
              )}
            </AnimatePresence>
            <div className="bar-mobile">
              {isMobileOpen ? (
                <LiaTimesSolid
                  size={24}
                  onClick={() => setIsMobileOpen(false)}
                />
              ) : (
                <FaBars size={18} onClick={() => setIsMobileOpen(true)} />
              )}
            </div>
            <Button>
              <span>Get in Touch</span>
            </Button>
          </div>
          <div className="navbar-mobile">
            <div className="bar-mobile">
              {isMobileOpen ? (
                <LiaTimesSolid
                  size={24}
                  onClick={() => setIsMobileOpen(false)}
                />
              ) : (
                <FaBars size={18} onClick={() => setIsMobileOpen(true)} />
              )}
            </div>
            <Button>
              <span>Get in Touch</span>
            </Button>
          </div>
        </div>
      </header>
      <SwipeableDrawer
        anchor="left"
        open={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpen={() => setIsMobileOpen(true)}
      >
        <div className="nav-mobile">
          <div className="mobile-logo">
            <div
              onClick={() => {
                router.push("/");
                setIsMobileOpen(false);
              }}
              className="logo"
            >
              <Image src="/images/logo.jpg" alt="logo" width={35} height={35} />
              <p>DanielBlac DevHub</p>
            </div>
          </div>
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
            transition={{ duration: 0.5 }}
            className="nav-list"
          >
            <div
              onClick={() => {
                router.push("/");
                setIsMobileOpen(false);
              }}
              className={pathname === "/" ? "active-mobile-nav" : "mobile-nav"}
            >
              <p>:Home</p>
            </div>
            <div
              onClick={() => {
                router.push("/services");
                setIsMobileOpen(false);
              }}
              className={
                pathname === "/services" ? "active-mobile-nav" : "mobile-nav"
              }
            >
              <p>:Services</p>
            </div>
            <div
              onClick={() => {
                router.push("/projects");
                setIsMobileOpen(false);
              }}
              className={
                pathname === "/projects" ? "active-mobile-nav" : "mobile-nav"
              }
            >
              <p>:Projects</p>
            </div>
            <div
              onClick={() => {
                router.push("/contact");
                setIsMobileOpen(false);
              }}
              className={
                pathname === "/contact" ? "active-mobile-nav" : "mobile-nav"
              }
            >
              <p>:Contact Us</p>
            </div>
          </motion.nav>

          <div className="socials">
            <Link
              href="https://linkedin.com/in/daniel-egboro-ebipamowei"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={23} className="social-icon" />
            </Link>
            <Link
              href="https://linkedin.com/in/daniel-egboro-ebipamowei"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={22} className="social-icon" />
            </Link>
            <Link
              href="https://linkedin.com/in/daniel-egboro-ebipamowei"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={22} className="social-icon" />
            </Link>
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
}
