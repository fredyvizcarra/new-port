import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";

import * as THREE from "three";
import Lights from "./Lights";
import Loader from "./Loader";
import { Earth } from "./Earth";
import { Suspense } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, item }) => {
  return (
    <View index={index} id={gsapType} className={`w-full h-full absolute `}>
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[2, 2, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
      />

      <group ref={groupRef} name="earth" position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <Earth scale={[0.7, 0.7, 0.7]} item={item} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
