import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-white h-[600px] flex flex-col p-4 gap-4 w-72 border-1 border-slate-400 justify-end'>
       <h1 className='text-[22px] font-bold'>Welcome to PopX</h1>
      <p className='text-slate-400'>Lorem ipsum dolor sit amet,</p>
      <p className='text-slate-400'>consetur rem! Aliquam, quas.</p>
      <button className='btn bg-[#6c25ff] text-white'>
       <Link to="/register">
        Create Account
        </Link>
      </button>
      <button className='btn bg-[#cebafb] text-black mb-4'>
       <Link to="/login">
        Already Registered? Login
       </Link>
      </button>
    </div>
  )
}

export default Home