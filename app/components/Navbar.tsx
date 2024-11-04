import React from 'react';

const Navbar: React.FC = () => {
  return (
  
      
      <div className="flex justify-evenly font-semibold">
        <a href="#home" className="m-2 text-lg text-white">Home</a>
        <a href="#projects" className="m-2 text-lg text-white">Projects</a>
        <img src="https://pbs.twimg.com/profile_images/1237713396717379586/5AN0zZuW_400x400.jpg" className="w-12"></img>
        <a href="#events" className="m-2 text-lg text-white">Events</a>
        <a href="#contact" className="m-2 text-lg text-white">Contact</a>
      </div>

  );
};

export default Navbar;
