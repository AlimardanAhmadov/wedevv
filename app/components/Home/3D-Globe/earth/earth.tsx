'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState, useMemo } from 'react';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

const CITIES_JSON_URL = '/assets/cities.json';
const NUM_POINTS = 8000;

const Globe = () => {
  const globeRef = useRef();
  const { scrollYProgress } = useScroll();
  const [worldPoints, setWorldPoints] = useState([]);
  const rotationSpeed = 0.000009;

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(CITIES_JSON_URL);
      const data = await response.json();

      const points = generateDottedPoints(data, NUM_POINTS);
      setWorldPoints(points);
    };

    fetchCities();
  }, []);

  const generateDottedPoints = (cities, numPoints) => {
    const step = Math.ceil(cities.length / numPoints);
    return cities.filter((_, index) => index % step === 0).map(city => [
      parseFloat(city.lat),
      parseFloat(city.lng)
    ]);
  };

  const createDottedGlobe = () => {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.PointsMaterial({ color: 0x00aaff, size: 0.007 });

    const positions = [];

    worldPoints.forEach(([lat, lng]) => {
      const [x, y, z] = latLonToXYZ(lat, lng);
      positions.push(x, y, z);
    });

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    return new THREE.Points(geometry, material);
  };

  const latLonToXYZ = (lat, lng) => {
    const radius = 1;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return [x, y, z];
  };

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += rotationSpeed;

      const scrollRotation = scrollYProgress.get() * 0.01;
      globeRef.current.rotation.y += scrollRotation;
    }
  });

  return <primitive ref={globeRef} object={createDottedGlobe()} />;
};


const BackgroundSphere = () => {
  const backgroundRef = useRef();

  const geometry = useMemo(() => new THREE.SphereGeometry(1.01, 32, 32), []);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.BackSide,
      uniforms: {
        opacity: { value: 0.08 },
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition;
        }
      `,
      fragmentShader: `
        uniform float opacity;
        varying vec2 vUv;

        void main() {
          // Create a gradient from black to transparent and back to black
          vec3 color;
          if (vUv.x < 0.5) {
            // Left side (black to transparent)
            color = mix(vec3(0.0, 0.0, 0.0), vec3(0.0, 0.0, 0.0), smoothstep(0.0, 0.5, vUv.x));
          } else {
            // Right side (transparent to black)
            color = mix(vec3(0.0, 0.0, 0.0), vec3(0.0, 0.0, 0.0), smoothstep(0.5, 1.0, vUv.x));
          }
          gl_FragColor = vec4(color, opacity);
        }
      `,
    });
  }, []);

  useFrame(() => {
    if (backgroundRef.current) {
      backgroundRef.current.rotation.y = 0;
    }
  });

  return <mesh ref={backgroundRef} geometry={geometry} material={material} />;
};

export default function Earth() {
  const scene = useRef();

  return (
    <Canvas ref={scene} style={{ width: '200vw', height: '200vh' }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 2, 2]} />
      <BackgroundSphere /> 
      <Globe />
    </Canvas>
  );
}
