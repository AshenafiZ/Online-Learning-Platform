import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function HeaderAdmin() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="bg-blue-900  z-50  text-white fixed top-0 left-0 w-full shadow-lg z-10 h-16">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center h-full">
        <div className="flex items-center space-x-4">
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <div className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4`}>
            <NavLink
              to="/admin"
              end
              className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
            >
              Home
            </NavLink>
            <NavLink
              to="/admin/courses"
              className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
            >
              Courses
            </NavLink>
            <NavLink
              to="/admin/users"
              className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
            >
              Users
            </NavLink>
            <NavLink
              to="/admin/chat"
              className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
            >
              Chat
            </NavLink>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
            >
              Settings
            </NavLink>
          </div>
        </div>
        <div>
          <NavLink
            to="/admin/profile"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
    <div className="mt-16">
        <Outlet />
    </div>
    </>
  );
};

export default HeaderAdmin;
