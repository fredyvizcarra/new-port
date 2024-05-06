import React from "react";

import { technologies } from "../constants";
import { Tilt } from "react-tilt";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-12 px-2 md:px-24 my-4 mb-2 md:my-10  ">
      {technologies.map((technology) => (
        <div
          className="w-16 md:w-20 h-16 md:h-20 flex flex-col justify-center gap-2"
          key={technology.name}
        >
          <Tilt
            options={{
              max: 25,
              scale: 1,
              speed: 450,
            }}
          >
            <div className="">
              <img src={technology.icon} alt={technology.name} />
            </div>
          </Tilt>
          <span className="text-center text-sm">{technology.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Tech;
