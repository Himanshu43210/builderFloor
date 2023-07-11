import { Canvas } from "@react-three/fiber";
import React from "react";
import classes from "./Viewer.module.css";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import Para from "./Para";
import { useState } from "react";
import { useEffect } from "react";

const CanvasItem = ({ item }) => {
  return (
    <div className="my-[10px]">
      <h1 className="text-[20px] font-bold f1 my-[10px] px-[14px] lg:hidden">
        {item.name}
      </h1>
      {/* <h1 className={classes.title}>360-view</h1> */}
      <div className={classes.canvas} id="canvas">
        <Canvas
          camera={{ position: [10, 0, 0], fov: 75 }}
          gl={{ antialias: false }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
          }}
        >
          <pointLight position={[0, 4, 0]} intensity={0.4} color="white" />
          <ambientLight intensity={0.7} />
          <Para image={item.src} />
          <OrbitControls maxDistance={250} minDistance={50} />
        </Canvas>
      </div>
    </div>
  );
};

export default React.memo(CanvasItem);
