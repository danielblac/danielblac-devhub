import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="web-links">
          <div className="same-page">
            <Link href="/#about">
              <p>About Us</p>
            </Link>
            <Link href="/#services">
              <p>Services</p>
            </Link>
          </div>
          <div className="same-page">
            <Link href="/projects">
              <p>Projects</p>
            </Link>
            <Link href="/contact">
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
        <div className="social-links">
          <p> © 2025 DanielBlac DevHub. All rights reserved.</p>
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
      </div>
      <div className="daniel-blac">
        <h1>DANIELBLAC DEVHUB</h1>
      </div>
    </footer>
  );
}
