"use client";
import Image from "next/image";
import { FaCommentAlt, FaHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import Slider from "react-slick";

export default function FeaturedProjects() {

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
    <div className="featured-projects">
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
