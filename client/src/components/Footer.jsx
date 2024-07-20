import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 flex flex-center justify-center items-center">
      <div className="flex  gap-4 items-center">
        <div>
          <p>&copy; {new Date().getFullYear()} Mern Estate. All rights reserved.</p>
        </div>
        <div className="flex">
          <a href="https://facebook.com" className="mr-4">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="mr-4">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="mr-4">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
