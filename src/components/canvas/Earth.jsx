import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Earth component responsible for rendering the Earth model
const Earth = () => {
  // Load the 3D model of the Earth
  const earth = useGLTF("./planet/scene.gltf");

  return (
    // Render the Earth model with specified scale, position, and rotation
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// EarthCanvas component contains the canvas and scene for rendering the Earth
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand' // Update the canvas on demand, helpful for performance
      dpr={[1, 2]} // Set device pixel ratio for better rendering on high-DPI displays
      gl={{ preserveDrawingBuffer: true }} // Preserve drawing buffer for image capture
      camera={{
        fov: 45, // Field of view for the camera
        near: 0.1, // Near clipping plane
        far: 200, // Far clipping plane
        position: [-4, 3, 6], // Camera position in 3D space
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate // Automatically rotate the scene
          enableZoom={false} // Disable zoom interaction
          maxPolarAngle={Math.PI / 2} // Set maximum polar angle for camera
          minPolarAngle={Math.PI / 2} // Set minimum polar angle for camera
        />
        <Earth /> {/* Render the Earth component */}
        <Preload all /> {/* Preload assets for smoother experience */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
