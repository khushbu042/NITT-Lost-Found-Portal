import React, { useState } from "react";
import { login } from "../api/user.api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Login = () => {
     
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");
    const [msg,setMsg] = useState("");

    const navigate = useNavigate();
    const {setIsLoggedIn} = useUser();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await login({email,password});
            setMsg(response.message);
            setIsLoggedIn(true);
            navigate('/dashboard');
        } catch (err) {
            console.log("error message:",err.message)
            setMsg(err.message);
        }
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
            <p>{msg}</p>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;
  