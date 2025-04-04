"use client";
import ServicesTech from "@/components/molecules/home/ServicesTech";
import Image from "next/image";
import { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import Slider from "react-slick";

export default function Services() {
  const [websiteDev, setWebsiteDev] = useState(true);
  const [mobileDev, setMobileDev] = useState(false);
  const [techEdu, setTechEdu] = useState(false);
  const [devOps, setDevOps] = useState(false);
  const [uiuxDesign, setUiuxDesign] = useState(false);
  const [grahipcsDesign, setGrahipcsDesign] = useState(false);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    dots: false,
    arrows: false,
  };

  return (
    <div className="services">
      <h2 className="services-header">Our Services</h2>

      <div className="service-nav">
        <div
          className={websiteDev ? "nav-active" : "nav-opt"}
          onClick={() => {
            setWebsiteDev(true);
            setMobileDev(false);
            setTechEdu(false);
            setDevOps(false);
            setUiuxDesign(false);
            setGrahipcsDesign(false);
          }}
        >
          <p>Website Development</p>
          {websiteDev && <div className="active-dot"></div>}
        </div>
        <div
          className={mobileDev ? "nav-active" : "nav-opt"}
          onClick={() => {
            setWebsiteDev(false);
            setMobileDev(true);
            setTechEdu(false);
            setDevOps(false);
            setUiuxDesign(false);
            setGrahipcsDesign(false);
          }}
        >
          <p>Mobile App Development</p>
          {mobileDev && <div className="active-dot"></div>}
        </div>
        <div
          className={techEdu ? "nav-active" : "nav-opt"}
          onClick={() => {
            setWebsiteDev(false);
            setMobileDev(false);
            setTechEdu(true);
            setDevOps(false);
            setUiuxDesign(false);
            setGrahipcsDesign(false);
          }}
        >
          <p>Tech Education</p>
          {techEdu && <div className="active-dot"></div>}
        </div>
        <div
          className={devOps ? "nav-active" : "nav-opt"}
          onClick={() => {
            setWebsiteDev(false);
            setMobileDev(false);
            setTechEdu(false);
            setDevOps(true);
            setUiuxDesign(false);
            setGrahipcsDesign(false);
          }}
        >
          <p>Dev Ops</p>
          {devOps && <div className="active-dot"></div>}
        </div>
        <div
          className={uiuxDesign ? "nav-active" : "nav-opt"}
          onClick={() => {
            setWebsiteDev(false);
            setMobileDev(false);
            setTechEdu(false);
            setDevOps(false);
            setUiuxDesign(true);
            setGrahipcsDesign(false);
          }}
        >
          <p>UI/UX designs</p>
          {uiuxDesign && <div className="active-dot"></div>}
        </div>
        <div
          className={grahipcsDesign ? "nav-active" : "nav-opt"}
          onClick={() => {
            setWebsiteDev(false);
            setMobileDev(false);
            setTechEdu(false);
            setDevOps(false);
            setUiuxDesign(false);
            setGrahipcsDesign(true);
          }}
        >
          <p>Website Development</p>
          {grahipcsDesign && <div className="active-dot"></div>}
        </div>
      </div>

      <div className="services-details">
        <div className="services-description">
          {websiteDev && (
            <>
              <div className="time-scroll-container">
                <div className="time-scroll"></div>
              </div>
              <div className="globe">
                <BsGlobe size={20} />
              </div>
              <div className="service-website">
                <h2>Website Development</h2>
                <p className="service-website-details">
                  Crafting high-performing websites that captivate audiences,
                  drive growth, and deliver seamless user experiences tailored
                  to your brand.
                </p>

                <p className="service-website-link">
                  Need a website? <span>Get in Touch</span>
                </p>
              </div>
            </>
          )}
        </div>
        <div className="services-annimation">
          {websiteDev && (
            <div className="web-project-carousel">
              <Slider {...settings}>
                <div className="web-project">
                  <div className="web-project-img">
                    <Image
                      src="/images/gamz-poster.png"
                      alt="logo"
                      width={577}
                      height={346}
                    />
                  </div>
                </div>
                <div className="web-project">
                  <div className="web-project-img">
                    <Image
                      src="/images/gamz-poster.png"
                      alt="logo"
                      width={577}
                      height={346}
                    />
                  </div>
                </div>
                <div className="web-project">
                  <div className="web-project-img">
                    <Image
                      src="/images/gamz-poster.png"
                      alt="logo"
                      width={577}
                      height={346}
                    />
                  </div>
                </div>
              </Slider>
              <div className="web-project-writeup-container">
                <Slider {...settings}>
                  <div className="web-project-writeup">
                    <p>
                      At DanielBlac Devhub, we bring your ideas to life with
                      innovative web and app solutions. We specialize in
                      creating sleek
                    </p>
                    <div className="code">
                      <FaCode />
                    </div>
                  </div>
                  <div className="web-project-writeup">
                    <p>
                      At DanielBlac Devhub, we bring your ideas to life with
                      innovative web and app solutions. We specialize in
                      creating sleek
                    </p>
                    <div className="code">
                      <FaCode />
                    </div>
                  </div>
                  <div className="web-project-writeup">
                    <p>
                      At DanielBlac Devhub, we bring your ideas to life with
                      innovative web and app solutions. We specialize in
                      creating sleek
                    </p>
                    <div className="code">
                      <FaCode />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          )}
        </div>
      </div>

      <ServicesTech />
    </div>
  );
}
