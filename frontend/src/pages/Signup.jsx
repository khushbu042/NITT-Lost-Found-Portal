import React, { useState } from 'react';
import { register } from '../api/user.api.js';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();
  const [user,setUser] = useState({
    fullName: "",
    email: "",
    password: ""
  })

  const [msg,setMsg] = useState("");

 

  const handleChange = (e) => {
      const {name, value} = e.target;
      setUser((prev) => ({
        ...prev,
        [name]:value,
      }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await register(user);
      setMsg(response.message);
      navigate('/login');
     
    }catch(err){
      console.log("error message:",err.message)
      setMsg(err.message);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input 
              type="text" 
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input 
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input 
              type="password"
              name="password" 
              value={user.password}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            SignUp
          </button>
          <p>{msg}</p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;