import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function StickySocialNav() {
  return (
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-full px-4 py-2 flex items-center space-x-4 shadow-lg z-50">
      <a
        href="https://github.com/stebern17"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/sultan-faaiz-686656149/
"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-800 dark:text-gray-200 hover:text-blue-700 transition-colors duration-300"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://www.instagram.com/sultan.faaiz/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors duration-300"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="mailto:faaiz777@gmail.com"
        aria-label="Email"
        className="text-gray-800 dark:text-gray-200 hover:text-red-500 transition-colors duration-300"
      >
        <FaEnvelope size={24} />
      </a>
    </nav>
  );
}
