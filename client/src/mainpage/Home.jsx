import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import bg from '../assets/bg.png'

function Home(){
  return (
    <div className="relative w-full h-screen bg-purple-900 text-white">
      
      <img src={bg} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-70" />
      
      
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-10 md:p-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Build Skills With <br /> Flexible Online Courses
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
        </p>
        <button className="bg-yellow-500 text-purple-900 px-6 py-3 text-lg font-bold rounded-full hover:bg-yellow-600">
          Get Started
        </button>
      </div>

      {/* Icon with Text */}
      <div className="absolute bottom-10 left-10 flex items-center space-x-2 text-yellow-500 text-2xl md:text-3xl">
        <FaGraduationCap />
        <span className="text-xl md:text-2xl font-bold text-white">
          Winner
        </span>
      </div>
    </div>
  );
}

export default Home;
