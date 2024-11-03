import React from 'react';
import { FaEnvelope, FaInstagram,  FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white  mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-lg  mb-3 p-3">Connect with Me</h2>
        <div className="flex justify-center space-x-5 mb-4">
          <a href="mailto:ataartist.13@gmail.com" className="text-gray-400 hover:text-white" aria-label="Email">
            <FaEnvelope size={24} />
          </a>
          <a href="https://instagram.com/asmataariq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/AsmaTariqA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
       
        </div>
        <p className="text-sm m-9">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
