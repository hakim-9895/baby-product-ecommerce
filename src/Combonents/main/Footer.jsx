import React from 'react';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
  
        <div className="flex items-center gap-2">
          <FaInstagram size={24} />
          <span className="text-lg font-semibold">Follow us on Instagram</span>
        </div>

        
        <div className="mt-3 md:mt-0 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <span className="font-bold">onajal</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
