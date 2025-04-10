"use client";

import { Button } from "@/components/atoms/Button";
import { CircularProgress, TextField } from "@mui/material";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

export default function Contact() {
  // DECLARATIONS
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccessful(true);
    }, 3000);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsSuccessful(false);
    }, 5000);
  }, [isSuccessful]);

  return (
    <div className="contact">
      <div className="contact-top"></div>
      <div className="contact-details">
        <div className="contact-header">
          <h2>Let’s Get in Touch.</h2>
          <p>
            Ready to elevate your business or learn new tech skills? We're here
            to help. Reach out to us today, and let’s start creating something
            amazing.
          </p>

          <div className="contact-info-icon">
            <div className="contact-icon">
              <FaPhone size={20} />
            </div>
            <Link href="tel:+2349055316606">
              <p>+234 905531666</p>
            </Link>
          </div>

          <div className="contact-info-icon">
            <div className="contact-icon">
              <IoMdMailUnread size={24} />
            </div>
            <Link href="mailto:daniel_blac@yahoo.com">
              <p>daniel_blac@yahoo.com</p>
            </Link>
          </div>

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
        <div className="contact-form">
          <div className="form-header">
            <p>Contact Us</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="divide-forms">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                placeholder="Enter your first name"
                required
                fullWidth
                color="secondary"
                value={formData.first_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    first_name: e.target.value,
                  })
                }
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                placeholder="Enter your last name"
                required
                fullWidth
                color="secondary"
                value={formData.last_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    last_name: e.target.value,
                  })
                }
              />
            </div>

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              placeholder="Enter your email"
              type="email"
              required
              fullWidth
              color="secondary"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={8}
              required
              placeholder="Enter Message Here..."
              fullWidth
              color="secondary"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
            />

            <Button type="submit">
              {loading ? (
                <CircularProgress color="inherit" size={20} thickness={5} />
              ) : (
                <span>Send</span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
