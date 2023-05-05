'use client';
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "../components/Cylinder3d";
import Box3d from "../components/Box3d";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col items-center justify-center flex-1">
        <div className="text-xl font-bold">Cubie</div> 
        <Canvas>
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <ambientLight /> */}
        <Box3d position={[-1.2, 0, 0]} />
        <Cylinder3d position={[1.2, 0, 0]} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </section>
    </main>
  );
}
