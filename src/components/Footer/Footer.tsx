import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; 2024 SAS Group IT Solutions. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#about" className="text-sm hover:underline">About Us</a>
          <a href="#services" className="text-sm hover:underline">Services</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
        </div>
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm">Empowering Your Digital Presence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
