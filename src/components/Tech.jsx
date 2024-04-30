import React from "react";

import BallCanvas from "./canvas/Ball";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 flex flex-col justify-center gap-2"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
          <span className="text-center text-sm">{technology.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Tech;
