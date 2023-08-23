import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

// Component defining the 3D computer scene
const Computers = ({ isMobile }) => {
  // Load the 3D model of the computer
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <group> {/* A container for grouping scene elements */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={Math.PI / 2} 
        penumbra={1}
        castShadow
        intensity={1}
        shadowMapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.75} 
        position={isMobile ? [0, -1.8, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

// Main component containing the canvas and scene
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [rotate, setRotate] = useState(false); // Add a state to control rotation

  useEffect(() => {
    // Listen for changes in screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Initialize `isMobile` state based on screen size
    setIsMobile(mediaQuery.matches);

    // Handle changes in media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add listener for media query changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up when component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleCanvasTouch = () => {
    setRotate(!rotate);
  };

  return (
    <Canvas
    frameloop={rotate ? "always" : "demand"} // Use demand when not rotating
    onPointerDown={handleCanvasTouch} // Listen for canvas touch
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
  >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={2} /> {/* Add soft overall lighting */}
        <Computers isMobile={isMobile} /> {/* Render the 3D scene */}
      </Suspense>

      <Preload all /> {/* Preload assets for smoother experience */}
    </Canvas>
  );
};

export default ComputersCanvas;
