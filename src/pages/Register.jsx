import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-white h-[600px] flex flex-col p-4 gap-4 w-72 border-1 border-slate-400 justify-between">
    <div className=" flex flex-col  gap-4 ">
        <h1 className="text-[22px] font-bold">Create your <br /> PopX account</h1>

      {/* name Input */}
      <div className="flex flex-col gap-1 relative">
        <label
          htmlFor="name"
          className="text-[#6c25ff] text-sm font-medium absolute bg-white top-0 left-3 transform -translate-y-1/2 px-1"
        >
          Full Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          className="h-10 w-full border border-gray-300 rounded-md px-3 text-gray-900 focus:border-blue-500 focus:outline-none"
          placeholder="Enter your name "
        />
      </div>
      {/* phone input */}
      <div className="flex flex-col gap-1 relative">
        <label
          htmlFor="phone"
          className="text-[#6c25ff] text-sm font-medium absolute bg-white top-0 left-3 transform -translate-y-1/2 px-1"
        >
          Phone number<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="phone"
          className="h-10 w-full border border-gray-300 rounded-md px-3 text-gray-900 focus:border-blue-500 focus:outline-none"
          placeholder="Enter your phone"
        />
      </div>
      {/* Email Input */}
      <div className="flex flex-col gap-1 relative">
        <label
          htmlFor="email"
          className="text-[#6c25ff] text-sm font-medium absolute bg-white top-0 left-3 transform -translate-y-1/2 px-1"
        >
          Email address<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          className="h-10 w-full border border-gray-300 rounded-md px-3 text-gray-900 focus:border-blue-500 focus:outline-none"
          placeholder="Enter your email"
        />
      </div>
       {/* pass Input  */}
      <div className="flex flex-col gap-1 relative">
        <label
          htmlFor="password"
          className="text-[#6c25ff] text-sm font-medium absolute bg-white top-0 left-3 transform -translate-y-1/2 px-1"
        >
          Password<span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="password"
          className="h-10 w-full border border-gray-300 rounded-md px-3 text-gray-900 focus:border-blue-500 focus:outline-none"
          placeholder="Enter Password"
        />
      </div>
      {/* company Input */}
      <div className="flex flex-col gap-1 relative">
        <label
          htmlFor="company"
          className="text-[#6c25ff] text-sm font-medium absolute bg-white top-0 left-3 transform -translate-y-1/2 px-1"
        >
          Company name
        </label>
        <input
          type="text"
          id="company"
          className="h-10 w-full border border-gray-300 rounded-md px-3 text-gray-900 focus:border-blue-500 focus:outline-none"
          placeholder="Enter Company Name"
        />
      </div>
      <p>Are you an Agency?<span className="text-red-500">*</span></p>
      <div className="flex gap-3">
        <input
          type="radio"
          name="radio-4"
          className="radio radio-primary"
          defaultChecked
        />
        <p>Yes</p>
        <input type="radio" name="radio-4" className="radio radio-primary" />
        <p>No</p>
      </div>
    </div>

      <button className="btn bg-[#6c25ff] text-white mb-2 ">
        <Link to="/profile">Create Account</Link>
      </button>
    </div>
  );
};

export default Register;