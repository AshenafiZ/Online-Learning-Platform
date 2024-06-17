import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
function Footer(){

    return(
        <div>
            <div>
                
            </div>
            <div className="grid grid-cols-3 text-center bg-gray-200 gap-4 p-4">
                <div >
                    <h2 className='text-center'>COMPANY</h2>
                    <ul>
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/aboutus' >About Us</Link></li>
                        <li><Link to='/courses' >Courses </Link></li>
                    </ul>

                </div>
                <div className='text-center'>
                    <h2 className='text-center '>CONTACT US</h2>
                    <p>+251112111222</p>
                    <p>+251112221111</p>
                    <p>ashenafi@ethiopia.com</p>

                </div>
                
                <div className="flex flex-col space-y-4">
                    <h2 className='text-center '>FOLLOW US</h2>
                    <div className="flex space-x-4 p-1 text justify-center">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="split-icon bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"><FaFacebookF className="text-xl" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="split-icon bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"><FaLinkedinIn className="text-xl" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="split-icon bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500"><FaTelegramPlane className="text-xl" /></a>
                        
                    </div>
                    <div className="flex space-x-4 p-1 justify-center">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="split-icon bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600"><FaInstagram className="text-xl" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="split-icon bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500"><FaTwitter className="text-xl" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="split-icon bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900"><FaGithub className="text-xl" /></a>
                    </div>
                </div>       
                
            </div>  
            <div className="flex justify-center p-4 bg-gray-300 text-gray-700"><p>&copy; {new Date().getFullYear()} Addis Ababa Institute of technology Online Learning. All rights reserved.</p></div>          
        </div>
    );

}

export default Footer;