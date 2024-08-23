import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Model = () => {
  const { scene } = useGLTF("/jintropin.glb");
  const modelRef = useRef<any>();

  useFrame(() => {
    modelRef.current.rotation.y += 0.0035;
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={[0.2, 0.2, 0.2]}
      position={[0.9, 0, -1]}
    />
  );
};
