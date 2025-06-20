import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animation";
import { chipImg } from "../utils";
import Tech from "./Tech";

const HowItWorks = () => {
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section id="skills" className="common-padding mt-4 sm:mt-0 mb-10">
      <div className="screen-max-width my-2">
        <div id="chip" className="flex-center w-full my-6">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center g_fadeIn">
          <h2 className="hiw-title">I have worked with:</h2>

          <p className="hiw-subtitle">
            Journeying Through My Development Skill Set
          </p>
        </div>
        <Tech />
      </div>
    </section>
  );
};

export default HowItWorks;
