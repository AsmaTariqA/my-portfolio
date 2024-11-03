import React from "react";
import { gsap } from "gsap";
import code from './images/code.png';
import reactLogo from './images/react.png'; // Import React logo
import vscode from './images/vscode.png'; // Import JavaScript logo
import ParticleImage, { forces, Vector } from "react-particle-image";
import ParticlesComponent from "./particles";
import { useGSAP } from "@gsap/react";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // Define the animations
    tl.from('.heading', { opacity: 0, x: -50, duration: 1 })
      .from('.sub-text', { opacity: 0, scale: 0, duration: 0.6 });
  });

  return (
    <div className="Home flex lg:flex-row justify-between items-center min-h-screen min-w-full text-white flex-col flex-initial">
      <ParticlesComponent />

      {/* Left Side: Text */}
      <header className="lg:ml-36 lg:mb-40 lg:mt-28 flex lg:justify-center flex-col items-center text-center justify-start lg:w-3/4">
  <h1 className="heading mb-2 sm:text-md sm:justify-start">
    <span>A</span><span>sma </span>
    <span>T</span><span>ariq </span>
    <span>A</span><span>nsari </span>
  </h1>
  <p className="text-lg md:text-3xl sub-text">
    WEB DEVELOPER | WEB DESIGNER
  </p>
  <p className="description mt-4">Making it cool and fire at the same time to bring vibes to web 🚀 </p>
</header>

      {/* Right Side: Particle Images */}
      <div className="flex img  items-end mb-56">
       
        <ParticleImage
          style={{ width: "300px", height: "350px", marginLeft: "100px" }}
          scale={0.90}
          maxParticles={4000}
          backgroundColor="transparent"
          src={code}
          className="code"
          mouseMoveForce={(x, y) => forces.disturbance(x, y, 6)}
          touchMoveForce={(x, y) => forces.disturbance(x, y, 6)}
          mouseDownForce={(x, y) => forces.disturbance(x, y, 50)}
          particleOptions={{
            mass: () => 40,
            filter: ({ x, y, image }) => {
              const pixel = image.get(x, y);
              return pixel.a > 0;
            },
            color: () => "white",
            friction: () => 0.11,
            initialPosition: ({ canvasDimensions }) => {
              return new Vector(
                canvasDimensions.width / 3,
                canvasDimensions.height / 3
              );
            }
          }}
        />

        <div className="-mb-7">
        <ParticleImage
          style={{ width: "200px", height: "200px" }}
          scale={0.90}
          maxParticles={5000}
          backgroundColor="transparent"
          src={reactLogo}
          className="react"
          mouseMoveForce={(x, y) => forces.disturbance(x, y, 8)}
          touchMoveForce={(x, y) => forces.disturbance(x, y, 8)}
          mouseDownForce={(x, y) => forces.disturbance(x, y, 50)}
          particleOptions={{
            mass: () => 40,
            filter: ({ x, y, image }) => {
              const pixel = image.get(x, y);
              return pixel.a > 0;
            },
            color: () => "teal",
            friction: () => 0.11,
            initialPosition: ({ canvasDimensions }) => {
              return new Vector(
                canvasDimensions.width / 2,
                canvasDimensions.height / 2
              );
            }
          }}
        />
        </div>

        <div className="lg:mr-28 lg:mb-28">
        <ParticleImage
          style={{ width: "190px", height: "190px" }}
          scale={0.80}
          maxParticles={3000}
          backgroundColor="transparent"
          src={vscode}
          className="vscode"
          mouseMoveForce={(x, y) => forces.disturbance(x, y, 6)}
          touchMoveForce={(x, y) => forces.disturbance(x, y, 6)}
          mouseDownForce={(x, y) => forces.disturbance(x, y, 50)}
          particleOptions={{
            mass: () => 40,
            filter: ({ x, y, image }) => {
              const pixel = image.get(x, y);
              return pixel.a > 0;
            },
            color: () => "blue",
            friction: () => 0.11,
            initialPosition: ({ canvasDimensions }) => {
              return new Vector(
                canvasDimensions.width / 2,
                canvasDimensions.height / 2
              );
            }
          }}
        />
        </div>
      </div>
      <div className="mouse-icon lg:-ml-36 m-5 lg:mt-96">
    <span className="mouse-wheel"></span>
  </div>
    </div>
    
  );
}
