import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; 2024 SAS Soluciones IT. Todos los derechos reservados.</p>
        </div>
       
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm">Potenciando Tu Presencia Digital.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
