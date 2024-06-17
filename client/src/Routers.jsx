import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Teacher from './components/HeaderTeacher';
import HeaderStudent from './components/HeaderStudent';



function Routers() {
  return (
    
    <>
      <HeaderStudent />
      <div  className="mt-16 min-h-3/4 p-4">
      <Routes>
        <Route path='/teacher'>
          <Route index element={<h2>home page</h2>} />
          <Route path="courses" element={<h2>Courses</h2>} />
          <Route path="mycourses" element={<h2>My Courses</h2>} />
          <Route path="mystudents" element={<h2>My Student</h2>} />
          <Route path="upload" element={<h2>Upload</h2>} />
          <Route path="chat" element={<h2>Chat</h2>} />
          <Route path="settings" element={<h2>Settings</h2>} />
          <Route path="profile" element={<h2>Profile</h2>} />
        </Route>
        <Route path='/student'>
          <Route index element={<h2>home page</h2>} />
          <Route path="courses" element={<h2>Courses</h2>} />
          <Route path="mycourses" element={<h2>My Courses</h2>} />
          <Route path="cart" element={<h2>Carts</h2>} />
          <Route path="chat" element={<h2>Chat</h2>} />
          <Route path="settings" element={<h2>Settings</h2>} />
          <Route path="profile" element={<h2>Profile</h2>} />
        </Route>
          
      </Routes>
      </div>
      
      
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<h2>home page</h2>} />
          <Route path="/courses" element={<h2>Courses</h2>} />
          <Route path="/mycourses" element={<h2>My Courses</h2>} />
          <Route path="/mystudent" element={<h2>My Student</h2>} />
          <Route path="/upload" element={<h2>Upload</h2>} />
          <Route path="/chat" element={<h2>Chat</h2>} />
          <Route path="/settings" element={<h2>Settings</h2>} />
          <Route path="/profile" element={<h2>Profile</h2>} />
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </>
   
  );
};

export default Routers;


