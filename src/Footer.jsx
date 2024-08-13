import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center flex space-x-2 justify-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} sharikana. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href=".." target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-[#1476f1]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
