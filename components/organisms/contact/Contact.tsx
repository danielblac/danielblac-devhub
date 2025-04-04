"use client";

import { CircularProgress, TextField } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { IoMdMailUnread } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";

export default function Contact() {
  // DECLARATIONS
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    full_name: "",
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
    <>
      <Head>
        <title>Split Delivery | Contact</title>
      </Head>
      <div className="contact-page">
        <div className="contact-message">
          {pathname === "/contact" ? (
            <h1>Contact us for assistance or information of any kind</h1>
          ) : (
            <h1>Didn&apos;t find what you are looking for?</h1>
          )}

          <p>
            We are happy to hear from you. So please contact our customer
            service by phone, chat, or visit our local branch.
          </p>
          <div className="contact-info-icon">
            <div className="contact-icon">
              <IoLocationSharp />
            </div>
            <p>Horizon Financials Business Location</p>
          </div>
          <p>Atlanta, USA</p>

          <div className="contact-info-icon">
            <div className="contact-icon">
              <PiPhoneCallFill />
            </div>
            <p>Call for Assistance</p>
          </div>
          <Link href="tel:+17806044764">
            <p>+1 (780)604 4764</p>
          </Link>

          <div className="contact-info-icon">
            <div className="contact-icon">
              <IoMdMailUnread />
            </div>
            <p>Mail Us For Information</p>
          </div>
          <Link href="mailto:info@horizonfinancials.net">
            <p>info@horizonfinancials.net</p>
          </Link>
          <Link href="mailto:services@horizonfinancials.net">
            <p>services@horizonfinancials.net</p>
          </Link>
        </div>
        <div className="contact-form">
          <h4>Drop us a message</h4>
          <p>All fields are required</p>

          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              placeholder="E.g John Doe"
              required
              fullWidth
              color="secondary"
              value={formData.full_name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  full_name: e.target.value,
                })
              }
            />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              placeholder="E.g John Doe"
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
              rows={5}
              required
              placeholder="Enter Messahe Here..."
              fullWidth
              // color="secondary"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
            />

            <button type="submit">
              {loading ? (
                <CircularProgress color="inherit" size={20} thickness={5} />
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
        {/* {isSuccessful && (
          <AnimatePresence>
            <motion.div
              variants={menuVarient}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="success-msg"
            >
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Message was sent successfully.
              </Alert>
            </motion.div>
          </AnimatePresence>
        )} */}
      </div>
    </>
  );
}
