import React from "react";
import {FaCamera} from 'react-icons/fa'

const Profile = () => {
  return (
    <div className="bg-white h-[600px] flex flex-col w-72 border-1 border-slate-400 ">
      <div className="shadow bg-white p-4">
        <h2>Account Settings</h2>
      </div>
      <div className="flex justify-start items-center gap-4 p-4">
        <div className="relative w-14 h-14">
      {/* Avatar */}
      <img
        alt="logo"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        className="w-14 h-14 rounded-full object-cover"
      />

      {/* Camera Icon */}
      <div className="absolute bottom-0 right-0 bg-[#6c25ff] p-2 rounded-full shadow">
        <FaCamera className="w-3 h-3 text-white" />
      </div>
    </div>
        <div>
          <p>Marry</p>
          <p>Marry@gmail.com</p>
        </div>
      </div>
      <div className="p-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.porro saepe
        aliquam, inventore sapiente quae.
      </div>
      <div className="border-b-2 border-dotted border-slate-500 p-4"></div>
    </div>
  );
};

export default Profile;