// Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import HeaderMain from '../components/HeaderMain';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSignup = async () => {
    try {
      if(password === password2){
        await axios.post('http://localhost:3001/api/signup', { username, password, email, role });
        alert('Signup successful! Please login.');
      }
      else{
        alert('wrong password')
      }
    } catch (error) {
      console.error('Signup failed', error);
      // Handle signup failure (e.g., show an error message)
    }
  };

  return (
    <>
    <HeaderMain />
    <div  className="mt-16 min-h-3/4 p-1">
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Role</label>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select a role</option>
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
                </div>
                <button
                onClick={handleSignup}
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                Sign Up
                </button>
            </div>
        </div>
    </div>
    </>
    
    
  );
};

export default Signup;
