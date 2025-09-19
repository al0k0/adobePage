import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-white h-[600px] flex flex-col p-4 gap-6 w-72 border border-slate-400 rounded-md shadow-sm">
      <h1 className="text-[22px] font-bold">Welcome To PopX</h1>
      <p className="text-slate-500">Lorem ipsum dolor sit amet,</p>
      <p className="text-slate-500">consectetur rem! Aliquam, quas.</p>

      {/* Email Input  */}
      <div className="flex flex-col gap-1 relative">
        <label htmlFor="email" className="text-[#6c25ff] text-sm font-medium absolute bg-white top-0 left-3 transform -translate-y-1/2 px-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="h-10 w-full border border-gray-300 rounded-md px-3 text-gray-900 focus:border-blue-500 focus:outline-none"
          placeholder="Enter your email"
        />
      </div>

      {/* Password Input */}
      <div className="flex flex-col gap-1 relative">
        <label htmlFor="password" className="text-[#6c25ff] text-sm font-medium absolute bg-white top-0 left-3 transform -translate-y-1/2 px-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          className="h-10 w-full border border-gray-300 rounded-md px-3 text-gray-900 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Login Button */}
      <Link to="/profile">
        <button className="w-full bg-slate-300 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Login;