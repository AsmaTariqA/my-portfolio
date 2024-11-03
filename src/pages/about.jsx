import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const keyboardRef = useRef([]);
    const aboutRef = useRef(null);
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

            // Animate the "About me" section
            gsap.fromTo(
                aboutRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, [isMobile]); // Add isMobile as a dependency

    return (
        <div className="about flex flex-row">
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

            <div className="w-full md:w-1/2 px-9 md:px-8 ml-[10px] flex-row" ref={aboutRef}>
                <h2 className="text-3xl heading-text about md:text-5xl font-bold mb-4 text-white mt-60">
                    <span>A</span>bout me
                </h2>
                <p className="text-lg md:text-xl text-[#dd9afa] leading-relaxed">
                    I am Asma from Pakistan. I am a junior web developer and designer with a passion for creating modern, user-friendly websites.
                    I specialize in frontend development using technologies like React and Tailwind CSS.
                </p>
                <p className="text-lg md:text-xl text-[#dd9afa] leading-relaxed">
                    My goal is to help businesses and individuals establish their online presence through responsive and visually appealing designs.
                </p>
             
              

            </div>
        </div>
    );
}
