import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import expertiseImage from './images/tools.png';

const Experties = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    // Apply continuous rotation to both images
    gsap.to(imageRef1.current, {
      rotation: 360,
      duration: 5, // Adjust the duration for speed of rotation
      repeat: -1, // Infinite loop
      ease: "linear" // Smooth and continuous rotation
    });

    gsap.to(imageRef2.current, {
      rotation: 360,
      duration: 5,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center p-10 md:p-20 experties">
      {/* Left Column - First Image */}
      <div className="w-96 flex justify-center mb-8 md:mb-0">
        <img ref={imageRef1} src={expertiseImage} alt="Expertise" className="rounded-lg w-3/4 md:w-full" />
      </div>

      {/* Right Column - Text */}
      <div className="w-full md:w-1/2 px-8 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-text  text-white"><span>T</span>ools and <span>L</span>anguages</h2>
        <p className="text-lg md:text-xl text-[#dd9afa] leading-relaxed mb-6">
          I specialize in creating modern, responsive web solutions that bring your ideas to life.
          With a strong foundation in front-end development,  and a dedication to
          quality design, I provide comprehensive services tailored to your needs. Currently polishing my backend skills
        </p>
      </div>

      {/* Right Column - Second Image */}
      <div className="w-96 flex justify-center mb-8 md:mb-0">
        <img ref={imageRef2} src={expertiseImage} alt="Expertise" className="rounded-lg w-3/4 md:w-full" />
      </div>
      
    </div>
  );
};

export default Experties;
