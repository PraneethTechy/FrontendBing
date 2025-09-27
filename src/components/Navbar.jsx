import React from 'react';

// A helper component for the navigation links to avoid repetition
const NavLink = ({ number, text, href }) => (
  <a href={href} className="flex items-center text-gray-800  hover:text-red-600 transition-colors duration-300 p-2">
    <span className="bg-black text-yellow-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm font-bold">
      {number}
    </span>
    {text}
  </a>
);

const Navbar = () => {
  return (
    // Main Navbar container
    <nav className="relative flex items-center justify-between bg-[#fffb00] h-15 px-5 shadow-sm border-b-2 border-gray-200 w-full top-0 mt-0">
      
      {/* Left section containing badge and logo */}
<div className="flex items-center h-full">

  {/* Great Place to Work Badge */}
<div className="flex flex-col justify-center items-start h-full w-12 bg-red-600 text-white font-serif font-bold text-left text-xs leading-tight relative -ml-5 text-sm">
  <span>Great</span>
  <span>Place</span>
  <span>To</span>
  <span>Work</span>
</div>




  {/* Logo */}
  <div className="flex items-center ml-3 font-serif text-2xl font-bold text-gray-800">
    <span className="text-4xl mr-1 leading-none">💡</span>
    ting
  </div>
</div>


      {/* Right section with navigation links */}
      <div className="flex items-center space-x-2 font-sans text-sm">
        <NavLink number="01" text="Home" href="#home" />
        <div className="w-0.5 h-5 bg-gray-300"></div>
        <NavLink number="02" text="Our Work" href="#our-work" />
        <div className="w-0.5 h-5 bg-gray-300"></div>
        <NavLink number="03" text="Services" href="#services" />
        <div className="w-0.5 h-5 bg-gray-300"></div>
        <NavLink number="04" text="Team" href="#team" />
        <div className="w-0.5 h-5 bg-gray-300"></div>
        <NavLink number="05" text="Ting Things" href="#ting-things" />
      </div>

    

    </nav>
  );
};

export default Navbar;