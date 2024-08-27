import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const ModelMob = () => {
  const { scene } = useGLTF("/jintropin.glb");
  const modelRef = useRef<any>();

  useFrame(() => {
    modelRef.current.rotation.y += 0.035;
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={[0.13, 0.13, 0.13]}
      position={[0, 0.8, 0]}
    />
  );
};
