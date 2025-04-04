"use client";
import Image from "next/image";
import Slider from "react-slick";

export default function ChooseUs() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    gap: "2rem",
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="choose-us">
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

      <div className="choose-us-content">
        <p className="header-q">Why DanielBlac DevHub</p>
        <h2>Build and launch faster than ever.</h2>

        <div className="choose-us-cards">
          <Slider {...settings}>
            <div className="choose-us-card card-margin">
              <div className="choose-us-card-img card-one">
                <Image
                  src="/images/choose-us-card-one.png"
                  alt="logo"
                  width={297}
                  height={240}
                />
              </div>

              <div className="choose-us-card-details">
                <h3>Dedicated Team, Tailored Solutions</h3>
                <p>
                  Get a full-stack development team fully committed to your
                  project, delivering custom solutions designed for your
                  business needs.
                </p>
              </div>
            </div>
            <div className="choose-us-card card-margin">
              <div className="choose-us-card-img card-two">
                <Image
                  src="/images/choose-us-card-two.png"
                  alt="logo"
                  width={297}
                  height={240}
                />
              </div>

              <div className="choose-us-card-details">
                <h3>Lightning-Fast Turnaround Times</h3>
                <p>
                  Your project is our priority. We deliver quality work on time,
                  ensuring you can launch quickly and confidently.
                </p>
              </div>
            </div>
            <div className="choose-us-card">
              <div className="choose-us-card-img card-three">
                <Image
                  src="/images/choose-us-card-three.png"
                  alt="logo"
                  width={283}
                  height={220}
                />
              </div>
              <div className="choose-us-card-details">
                <h3>Affordable Pricing, Premium Quality</h3>
                <p>
                  Enjoy top-notch development services without breaking the
                  bank—world-class websites and apps at a fraction of the cost.
                </p>
              </div>
            </div>
            <div className="choose-us-card">
              <div className="choose-us-card-img card-four">
                <Image
                  src="/images/choose-us-card-four.png"
                  alt="logo"
                  width={300}
                  height={252}
                />
              </div>
              <div className="choose-us-card-details">
                <h3>Unlimited Revisions, Perfect Results</h3>
                <p>
                  Your vision matters. We collaborate closely with you, offering
                  unlimited revisions until your website or app is exactly as
                  you imagined.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
