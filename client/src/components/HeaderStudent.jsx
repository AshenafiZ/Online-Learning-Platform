// src/Navbar.js
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function HeaderStudent() {
  return (
    <>
    <nav className="bg-blue-900 text-white  z-50 fixed top-0 left-0 w-full shadow-lg z-10 h-16">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center h-full">
        <div className="flex space-x-4">
          <NavLink
            to="/student"
            end
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Home
          </NavLink>
          <NavLink
            to="/student/courses"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Courses
          </NavLink>
          <NavLink
            to="/student/mycourses"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            MyCourses
          </NavLink>
          <NavLink
            to="/student/cart"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Cart
          </NavLink>
          
          <NavLink
            to="/student/chat"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Chat
          </NavLink>
          <NavLink
            to="/student/settings"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Settings
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/student/profile"
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

export default HeaderStudent;
