/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, animations } = useGLTF("/models/magnifying_glass.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.rotate.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, -0.58, 0]}>
          <primitive object={nodes.Bone} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/magnifying_glass.glb");