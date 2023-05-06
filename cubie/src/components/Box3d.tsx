'use client';
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
 
function Box3d(props:any ) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<any>();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  const {scale, wireframe} = props;

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? scale * 2 : scale}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1, 4, 4, 4]} />
      <meshStandardMaterial
        wireframe={wireframe}
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}
 
export default Box3d;
