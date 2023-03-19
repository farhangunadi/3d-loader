import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Suspense } from "react";
import { BaseSceneInfo } from "../components/BaseScene";
import { Joglo } from "../Joglo";
import styles from "../styles/Home.module.css";
import { Tree } from "../TreeLP3";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Canvas shadows camera={{ position: [20, 5, 10], fov: 100, near: 1 }}>
        <group>
          <ambientLight intensity={0.6} />
          <spotLight penumbra={0.5} position={[10, 10, 10]} castShadow />
        </group>
        <Suspense fallback={null}>
          <mesh scale={2}>
            <boxGeometry />
            <meshBasicMaterial color="red" />
          </mesh>
          <Tree />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas> */}
      <BaseSceneInfo>
        <Joglo />
      </BaseSceneInfo>
    </div>
  );
}
