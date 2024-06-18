import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Teacher from './components/HeaderTeacher';
import HeaderStudent from './components/HeaderStudent';
import Login from './mainpage/Login';
import Signup from './mainpage/Signup';
import HeaderAdmin from './components/HeaderAdmin';
import HeaderMain from './components/HeaderMain';
import Home from './mainpage/Home';



function Routers() {
  return (
    
    <>
      <Routes> 
        <Route path='/' element={<HeaderMain />} >
          <Route index element={<Home />} />
          <Route path="courses" element={<h2>Courses</h2>} />
          <Route path="about" element={<h2>About us</h2>} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path='/admin' element={<HeaderAdmin />}>
          <Route index element={<h2>home page</h2>} />
          <Route path="courses" element={<h2>Courses</h2>} />
          <Route path="users" element={<h2>My Courses</h2>} />
          <Route path="chat" element={<h2>Chat</h2>} />
          <Route path="settings" element={<h2>Settings</h2>} />
          <Route path="profile" element={<h2>Profile</h2>} />
        </Route>
        <Route path='/teacher' element={<Teacher/>} >
          <Route index element={<h2>home page</h2>} />
          <Route path="courses" element={<h2>Courses</h2>} />
          <Route path="mycourses" element={<h2>My Courses</h2>} />
          <Route path="mystudents" element={<h2>My Student</h2>} />
          <Route path="upload" element={<h2>Upload</h2>} />
          <Route path="chat" element={<h2>Chat</h2>} />
          <Route path="settings" element={<h2>Settings</h2>} />
          <Route path="profile" element={<h2>Profile</h2>} />
        </Route>
        <Route path='/student' element={<HeaderStudent />} >
          <Route index element={<h2>home page</h2>} />
          <Route path="courses" element={<h2>Courses</h2>} />
          <Route path="mycourses" element={<h2>My Courses</h2>} />
          <Route path="cart" element={<h2>Carts</h2>} />
          <Route path="chat" element={<h2>Chat</h2>} />
          <Route path="settings" element={<h2>Settings</h2>} />
          <Route path="profile" element={<h2>Profile</h2>} />
        </Route>    
      </Routes>
      <Footer />
    </>
   
  );
};

export default Routers;


