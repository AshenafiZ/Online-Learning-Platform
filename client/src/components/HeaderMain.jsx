import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';

function HeaderMain(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="bg-blue-900 text-white z-50 fixed top-0 left-0 w-full shadow-lg z-10 h-16">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center h-full">
      <div className="relative inline-block ml-4">
      <FaGraduationCap className="text-gold text-5xl" />
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-xl font-bold text-white px-1">
        Winner
      </span>
    </div>
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            About Us
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Courses
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Sign Up
          </NavLink>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-white"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'bg-blue-700 block px-3 py-2 rounded-md' : 'hover:bg-blue-700 block px-3 py-2 rounded-md'}
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'bg-blue-700 block px-3 py-2 rounded-md' : 'hover:bg-blue-700 block px-3 py-2 rounded-md'}
          onClick={toggleMenu}
        >
          About Us
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) => isActive ? 'bg-blue-700 block px-3 py-2 rounded-md' : 'hover:bg-blue-700 block px-3 py-2 rounded-md'}
          onClick={toggleMenu}
        >
          Courses
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => isActive ? 'bg-blue-700 block px-3 py-2 rounded-md' : 'hover:bg-blue-700 block px-3 py-2 rounded-md'}
          onClick={toggleMenu}
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) => isActive ? 'bg-blue-700 block px-3 py-2 rounded-md' : 'hover:bg-blue-700 block px-3 py-2 rounded-md'}
          onClick={toggleMenu}
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
    <div className="mt-16">
        <Outlet />
    </div>
  </>
  );
};

export default HeaderMain;
