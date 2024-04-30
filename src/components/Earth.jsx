import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Earth(props) {
  const { nodes, materials } = useGLTF("/models/earth.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
        scale={1.5}
      />
    </group>
  );
}

useGLTF.preload("/models/earth.glb");
