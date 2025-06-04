import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-bold">Madina Shop</div>
        <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className="hidden sm:flex space-x-4">
          <li><a href="#" className="hover:underline">Boutique</a></li>
          <li><a href="#" className="hover:underline">AjouterProduit</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      {isOpen && (
        <ul className="sm:hidden px-4 pb-4 space-y-2">
          <li><a href="#" className="block py-1 border-b border-gray-700">Boutique</a></li>
          <li><a href="#" className="block py-1 border-b border-gray-700">AjouterProduit</a></li>
          <li><a href="#" className="block py-1">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
