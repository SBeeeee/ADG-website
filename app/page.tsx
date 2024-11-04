import React from 'react';
import Navbar from './components/Navbar';
import Mid from './components/Mid';
const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen background-gradient">
      <Navbar />
      <div className="flex h-full">
        <Mid/>
        <div className="relative flex-1">
          <div className="grid-overlay m-4 mr-10 mt-10"></div> {/* Grid overlay on the right side */}
        </div>
      </div>
    </div>
  );
};

export default Home;
