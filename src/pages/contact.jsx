import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaInstagram, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const keyboardRef = useRef([]);
  const contacttRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      // Animate each key in the keyboard
      keyboardRef.current.forEach((key, index) => {
        gsap.fromTo(
          key,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            delay: index * 0.05,
            scrollTrigger: {
              trigger: key,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate the "contactt me" section
      gsap.fromTo(
        contacttRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contacttRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [isMobile]); // Add isMobile as a dependency

  return (
    <div className="contact flex flex-row">
      <div className="w-full md:w-1/2 px-10 md:px-8 ml-[97px] flex-row" ref={contacttRef}>
        <h2 className="text-3xl heading-text md:text-5xl font-bold mb-4 text-white mt-70">
          <span>C</span>ontact Me
        </h2>

        <p className="text-sm md:text-xl text-[#dd9afa] leading-relaxed mb-6">
          I'm here to help bring your ideas to life with modern, responsive web solutions. Feel free to reach out via the following platforms.
        </p>

        <div className="contact-info">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-[#dd9afa] mr-4" size={24} />
            <span className="text-white text-lg">Email: ataartist.13@gmail.com</span>
          </div>
          
          <div className="flex items-center mb-4">
            <FaInstagram className="text-[#dd9afa] mr-4" size={24} />
            <a 
              href="https://instagram.com/asmataariq" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-lg"
            >
              Instagram: @asmataariq
            </a>
          </div>
          
          <div className="flex items-center">
            <FaGithub className="text-[#dd9afa] mr-4" size={24} />
            <a 
              href="https://github.com/AsmaTariqA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-lg"
            >
              GitHub: github.com/AsmaTariqA
            </a>
          </div>
        </div>

        <p className="text-sm md:text-xl text-[#dd9afa] leading-relaxed mt-6">
          Let's connect on social media or via email! Whether you're looking for a web developer, designer, or simply want to discuss ideas, I'm just a message away.
        </p>
      </div>

      {/* Keyboard Component */}
      <div className="flex flex-row -mt-40">
        <div className="keyboard">
          <div className="keyboardcontainer">
            <div className="keyboard-container">
              <div className="row">
                {['~.`', '!.1', '@.2', '#.3', '$.4', '%.5', 
                  '^.6', '&.7', '*.8', '(.9', ').0', '_.-', '+.=']
                  .map((keyvalue, index) => (
                    <div className='key' 
                         ref={el => keyboardRef.current[index] = el} key={index}>
                      {keyvalue.includes('.') ? (
                        keyvalue.split('.').map((part, idx) => (
                          <span key={idx}>{part}</span>
                        ))
                      ) : (
                        <span>{keyvalue}</span>
                      )}
                    </div>
                  ))} 
              </div>
              <div className="row">
                {['Tab', 'q', 'w', 'e', 'r', 't', 'y',
                  'u', 'i', 'o', 'p', '{_[', '}_]', '|_\\']
                  .map((keyvalue, index) => (
                    <div className='key' 
                         ref={el => keyboardRef.current[index + 13] = el} key={index + 13}>
                      {keyvalue.includes('_') ? (
                        keyvalue.split('_').map((part, idx) => (
                          <span key={idx}>{part}</span>
                        ))
                      ) : (
                        <span>{keyvalue}</span>
                      )}
                    </div>
                  ))} 
              </div>
              <div className="row">
                {['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 
                  'j', 'k', 'l', ':_;', `"_'`, 'Enter']
                  .map((keyvalue, index) => (
                    <div className='key' 
                         ref={el => keyboardRef.current[index + 26] = el} key={index + 26}>
                      {keyvalue.includes('_') ? (
                        keyvalue.split('_').map((part, idx) => (
                          <span key={idx}>{part}</span>
                        ))
                      ) : (
                        <span>{keyvalue}</span>
                      )}
                    </div>
                  ))} 
              </div>
              <div className="row">
                {['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
                  '<_,', '>_.', '?_/']
                  .map((keyvalue, index) => (
                    <div className='key' 
                         ref={el => keyboardRef.current[index + 39] = el} key={index + 39}>
                      {keyvalue.includes('_') ? (
                        keyvalue.split('_').map((part, idx) => (
                          <span key={idx}>{part}</span>
                        ))
                      ) : (
                        <span>{keyvalue}</span>
                      )}
                    </div>
                  ))} 
              </div>
              <div className="row">
                {['Ctrl', 'Alt', ' ', 'Ctrl', 'Alt', '<', '>']
                  .map((keyvalue, index) => (
                    <div key={index + 50} className='key' 
                         ref={el => keyboardRef.current[index + 50] = el}>
                      <span>{keyvalue}</span>
                    </div>
                  ))} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
