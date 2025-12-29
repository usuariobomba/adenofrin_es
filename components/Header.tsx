import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-1 px-4 relative shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-center items-center">
        <div className="flex flex-col items-center">
          {/* Increased logo size, reduced header padding, removed sticky positioning */}
          <img 
            src="https://i.ibb.co/QjxZNM8Z/bururanlogo-removebg-preview.png" 
            alt="Bururan Logo Oficial" 
            className="h-32 md:h-44 object-contain hover:scale-105 transition-transform duration-300 block"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;