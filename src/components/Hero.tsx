import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import * as THREE from "three";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({
      color: 0x007BFF,
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      scene.remove(torus);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-gradient-to-r from-quantm-blue to-quantm-navy opacity-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-quantm-navy mb-6">
              Empowering SMBs with Next-Gen Cybersecurity Solutions
            </h1>
            <p className="text-xl text-quantm-gray mb-8">
              Secure your business with tailored, proactive, and affordable protection.
            </p>
            <div className="space-x-4">
              <Button className="bg-quantm-blue hover:bg-quantm-navy text-white">
                Get Started
              </Button>
              <Button variant="outline" className="border-quantm-blue text-quantm-blue hover:bg-quantm-blue hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ maxHeight: "600px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};