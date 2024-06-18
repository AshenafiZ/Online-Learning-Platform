// src/Navbar.js
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Teacher() {
  return (
    <>
    <nav className="bg-blue-900 z-50 text-white fixed top-0 left-0 w-full shadow-lg z-10 h-16">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center h-full">
        <div className="flex space-x-4">
          <NavLink
            to="/teacher"
            end
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Home
          </NavLink>
          <NavLink
            to="/teacher/courses"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Courses
          </NavLink>
          <NavLink
            to="/teacher/mycourses"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            MyCourses
          </NavLink>
          <NavLink
            to="/teacher/mystudents"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            MyStudents
          </NavLink>
          <NavLink
            to="/teacher/upload"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Upload
          </NavLink>
          <NavLink
            to="/teacher/chat"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Chat
          </NavLink>
          <NavLink
            to="/teacher/settings"
            className={({ isActive }) => isActive ? 'bg-blue-700 px-3 py-2 rounded-md' : 'hover:bg-blue-700 px-3 py-2 rounded-md'}
          >
            Settings
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/teacher/profile"
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

export default Teacher;
