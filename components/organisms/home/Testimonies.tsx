"use client";

import TestimonialsCarousel from "@/components/molecules/home/TestimonialsCarousel";

export default function Testimonies() {
  return (
    <div className="testimonies">
      <p className="header-q">Our clients love us</p>
      <p className="testimonies-note">
        We’re proud to work with these startups, businesses, and entrepreneurs
        to bring their ideas to life. From beautifully crafted websites to
        intuitive apps, our clients trust us to deliver exceptional results.
      </p>

      <TestimonialsCarousel />
    </div>
  );
}
