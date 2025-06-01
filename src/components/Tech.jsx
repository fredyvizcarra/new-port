import React from "react";

import { technologies } from "../constants";
import { Tilt } from "react-tilt";
import BallCanvas from "./canvas/Ball";
import {
  html,
  css,
  javascript,
  typescript,
  python,
  reactjs,
  figma,
  git,
  threejs,
  tailwind,
  nextjs,
  rulas,
  leo,
} from "../assets";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-12 px-2 md:px-24 my-4 mb-2 md:my-10  ">
      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <Tilt options={{ max: 25, scale: 1, speed: 450 }}>
          <div>
            <img src={html} alt="HTML 5" />
          </div>
        </Tilt>
        <span className="text-center text-sm">HTML 5</span>
      </div>

      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <Tilt options={{ max: 25, scale: 1, speed: 450 }}>
          <div>
            <img src={css} alt="CSS 3" />
          </div>
        </Tilt>
        <span className="text-center text-sm">CSS 3</span>
      </div>

      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <Tilt options={{ max: 25, scale: 1, speed: 450 }}>
          <div>
            <img src={javascript} alt="JavaScript" />
          </div>
        </Tilt>
        <span className="text-center text-sm">JavaScript</span>
      </div>

      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <Tilt options={{ max: 25, scale: 1, speed: 450 }}>
          <div>
            <img src={typescript} alt="TypeScript" />
          </div>
        </Tilt>
        <span className="text-center text-sm">TypeScript</span>
      </div>

      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <Tilt options={{ max: 25, scale: 1, speed: 450 }}>
          <div>
            <img src={reactjs} alt="React JS" />
          </div>
        </Tilt>
        <span className="text-center text-sm">React JS</span>
      </div>

      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <BallCanvas icon={leo} />
        <span className="text-center text-sm">Leo</span>
      </div>

      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <Tilt options={{ max: 25, scale: 1, speed: 450 }}>
          <div>
            <img src={tailwind} alt="Tailwind CSS" />
          </div>
        </Tilt>
        <span className="text-center text-sm">Tailwind</span>
      </div>

      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <Tilt options={{ max: 25, scale: 1, speed: 450 }}>
          <div>
            <img src={nextjs} alt="Next js" />
          </div>
        </Tilt>
        <span className="text-center text-sm">Next js</span>
      </div>

      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <BallCanvas icon={rulas} />
        <span className="text-center text-sm">Raul</span>
      </div>

      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <Tilt options={{ max: 25, scale: 1, speed: 450 }}>
          <div>
            <img src={python} alt="Python" />
          </div>
        </Tilt>
        <span className="text-center text-sm">Python</span>
      </div>

      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <Tilt options={{ max: 25, scale: 1, speed: 450 }}>
          <div>
            <img src={threejs} alt="Three JS" />
          </div>
        </Tilt>
        <span className="text-center text-sm">Three JS</span>
      </div>

      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <Tilt options={{ max: 25, scale: 1, speed: 450 }}>
          <div>
            <img src={git} alt="git" />
          </div>
        </Tilt>
        <span className="text-center text-sm">git</span>
      </div>

      <div className="w-16 md:w-20 h-16 md:h-24 flex flex-col justify-center gap-2">
        <Tilt options={{ max: 25, scale: 1, speed: 450 }}>
          <div>
            <img src={figma} alt="figma" />
          </div>
        </Tilt>
        <span className="text-center text-sm">figma</span>
      </div>
    </div>
  );
};

export default Tech;
