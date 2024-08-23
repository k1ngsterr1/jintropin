import { Canvas } from "@react-three/fiber";
import { ModelMob } from "@shared/ui/ModelMob";
import styles from "./styles.module.scss";

export const ThreeDScreenMob = () => {
  return (
    <>
      <section className={`${styles.screen}`}>
        <Canvas
          style={{
            width: "100%",
            height: "100vh",
          }}
          shadows
          camera={{ position: [0, 0, 10], fov: 35 }}
        >
          <ambientLight intensity={1} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <ModelMob />
        </Canvas>
      </section>
    </>
  );
};
