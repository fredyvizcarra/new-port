import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ModelView from "./ModelView";
import { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { animateWithGsapTimeline, animateWithGsap } from "../utils/animation";

const Model = () => {
  // camera control for the model view
  const cameraControlSmall = useRef();

  // model
  const small = useRef(new THREE.Group());

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <section className="common-padding h-screen">
      <div className="screen-max-width flex-col md:flex-row">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:1/3 h-[55vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="feature-text-container md:w-2/3">
            <div className="flex gap-0 flex-col md:gap-6">
              <h1 id="heading" className="section-heading">
                Overview.
              </h1>
              <p className="feature-text g_text md:text-lg/loose ">
                I am a web developer with over a year of experience in{" "}
                <span className="text-white">
                  JavaScript, React, Next.js and TailwindCss
                </span>
                , I am passionate about creating dynamic and responsive web
                applications that provide an incredible user experience. I am a
                technology enthusiast and constantly looking for ways to
                innovate and improve my skills to stay up to date with the
                latest trends and tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
