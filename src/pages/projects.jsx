import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import newsapp from "./images/newsapp.png";
import verse from './images/verse.png';
import quiz from './images/quiz.png';
import car from './images/car.png';
import bitcoin from './images/bitcoin.png';
import tictac from './images/tictac.png'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((project) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" className="p-10 md:p-24 text-white flex flex-col items-center">
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-12 heading-text">
        <span>P</span>rojects
      </h1>
      <div className="container">
        <div className="box" ref={(el) => projectRefs.current[0] = el}>
          <span></span>
          <div className="content">
            <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
              <img src={quiz} alt="" />
              Quiz app using react
            </h3>
            <p>Interactive quiz application built with React.</p>
            <button className=" text-[#783f91] py-1 px-3 text-sm md:text-md md:px1 font-semibold rounded-3xl bg-[#ffffff]">
            <a href="https://github.com/AsmaTariqA/Islamic-quiz-app" target="_blank" rel="noopener noreferrer">
            Source Code
            </a>
        </button>
          </div>
        </div>
        <div className="box" ref={(el) => projectRefs.current[1] = el}>
          <span></span>
          <div className="content">
            <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
              <img src={newsapp} alt="" />
              News app using react
            </h3>
            <p>Real-time news app that fetches the latest headlines and updates from a news API.</p>
            <button className=" text-[#783f91] py-1 px-3 text-sm md:text-md md:px1 font-semibold rounded-3xl bg-[#ffffff]">
            <a href="https://github.com/AsmaTariqA/newsapp" target="_blank" rel="noopener noreferrer">
            Source Code
            </a>
        </button>
          </div>
        </div>
        <div className="box" ref={(el) => projectRefs.current[2] = el}>
          <span></span>
          <div className="content">
            <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
              <img src={verse} alt="" />
              Verse finder using react
            </h3>
            <p>App for searching and displaying Quranic verses based on keywords.</p>
            <button className=" text-[#783f91] py-1 px-3 text-sm md:text-md md:px1 font-semibold rounded-3xl bg-[#ffffff]">
            <a href="https://github.com/AsmaTariqA/verse-finder" target="_blank" rel="noopener noreferrer">
            Source Code
            </a>
        </button>
          </div>
        </div>
        <div className="box" ref={(el) => projectRefs.current[3] = el}>
          <span></span>
          <div className="content">
            <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
              <img src={car} alt="" />
              Car control app design
            </h3>
            <p>Design for a car control app, allowing users to manage car features seamlessly.</p>
          </div>
        </div>
        <div className="box" ref={(el) => projectRefs.current[4] = el}>
          <span></span>
          <div className="content">
            <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
              <img src={bitcoin} alt="" />
              Bitcoin website landing page design
            </h3>
            <p>Modern landing page design for a Bitcoin-related website with real-time price tracking.</p>
          </div>
        </div>
        <div className="box" ref={(el) => projectRefs.current[4] = el}>
    <span></span>
    <div className="content">
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
            <img src={tictac} alt="Tic Tac Toe Game" />
            Tic Tac Toe game in React
        </h3>
        <p>A tic-tac-toe game built in React with features to calculate turns and select the winner.</p>
        <button className=" text-[#783f91] py-1 px-3 text-sm md:text-md md:px1 font-semibold rounded-3xl bg-[#ffffff]">
            <a href="https://github.com/AsmaTariqA/tic-tac-teo" target="_blank" rel="noopener noreferrer">
            Source Code
            </a>
        </button>
    </div>
</div>

      </div>
    </div>
  );
};

export default Projects;
