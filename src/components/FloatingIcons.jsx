import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const FloatingSocialIcons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-4">
      <a href="https://www.linkedin.com/in/mohd-saif-134076141/" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-gray-800 hover:bg-blue-800">
        <FaLinkedin className="text-white text-lg" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=7318114969" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-gray-800 hover:bg-green-500">
        <FaWhatsapp className="text-white text-lg" />
      </a>
      <a href="https://github.com/Saif-09" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-gray-800 hover:bg-gray-600 cursor-pointer">
        <FaGithub className="text-white text-lg" />
      </a>
    </div>
  );
};

export default FloatingSocialIcons;
