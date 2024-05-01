import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState, useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("reisze", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -150, delay: 2 });
  }, []);

  return (
    <section id="about" className="w-full nav-height bg-black">
      <div className="h-full w-full flex-center flex-col">
        <video
          className="pointer-events-none w-full h-full object-cover "
          autoPlay
          muted
          playsInline={true}
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-0"
      >
        <a href="#highlights" className="btn">
          Download CV
        </a>
        <p className="font-normal text-xl text-center">
          I'm a web developer focused on creating dynamic and responsive web
          solutions that provide a superior user experience.
        </p>
      </div>
    </section>
  );
};

export default Hero;
