import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Stars component responsible for rendering the stars
const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(10000), { radius: 1.2 })
  );

  // Use the useFrame hook to update rotation of the stars on each frame
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10; // Rotate around x-axis
    ref.current.rotation.y -= delta / 15; // Rotate around y-axis
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}> {/* Rotate the group of stars */}
      {/* Render the points representing stars */}
      <Points ref={ref} positions={sphere} stride={4} frustumCulled {...props}>
        {/* Apply point material to stars */}
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.0019}
          sizeAttenuation={true}
          depthWrite={true}
        />
      </Points>
    </group>
  );
};

// StarsCanvas component contains the canvas and scene for rendering the stars
const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      {/* Create a canvas to render the stars */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          {/* Render the Stars component */}
          <Stars />
        </Suspense>

        <Preload all /> {/* Preload assets for smoother experience */}
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
