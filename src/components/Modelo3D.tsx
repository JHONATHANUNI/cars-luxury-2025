import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stage, useGLTF } from "@react-three/drei";

export default function Modelo3D({ file }) {
  const { scene } = useGLTF(file);

  return (
    <Canvas
      shadows
      camera={{ position: [5, 5, 10], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Environment preset="city" />

      <Stage
        environment="city"
        intensity={0.8}
        shadows="contact"
        adjustCamera
      >
        <primitive object={scene} scale={1.5} />
      </Stage>

      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
