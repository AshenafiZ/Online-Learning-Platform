// Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderMain from '../components/HeaderMain';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    
    const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:3001/api/login', { username, password });
        const { token, role } = response.data;

    // Store the token in localStorage
        localStorage.setItem('token', token);

        console.log(role);

        if (role === 'admin') {
        navigate('/admin');
        } else if (role === 'student') {
        navigate('/student');
        } else if(role === 'teacher'){
        navigate('/teacher');
        } else {
            navigate('/home')
        }
    } catch (error) {
        console.error('Login failed', error);
        // Handle login failure (e.g., show an error message)
    }
    };

  
  return (
    <>
    <HeaderMain />
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-center">Login</h2>
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
            <button
                onClick={handleLogin}
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            Login
            </button>
            
            <div className="text-center">
            <p className="text-sm">
                
                <a href="/forget" className="text-blue-500 hover:underline">
                forget password
                </a>
            </p>
            <p className="text-sm">
                Don't have an account?{' '}
                <a href="/signup" className="text-blue-500 hover:underline">
                Sign up
                </a>
            </p>
            
            </div>
        </div>
    </div>
   
    </>
    
    
  );
};

export default Login;
